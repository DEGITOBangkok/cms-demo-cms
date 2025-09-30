"use strict";
const { createCoreController } = require("@strapi/strapi").factories;
const validateFileUpload = (file) => {
    const errors = [];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = [
        "application/pdf", // .pdf
        "application/msword", // .doc
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
        "text/plain", // .txt
        "application/rtf", // .rtf
        "application/vnd.oasis.opendocument.text", // .odt
        "application/vnd.apple.pages", // .pages
        "application/vnd.ms-excel", // .xls
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        "application/vnd.ms-powerpoint", // .ppt
        "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
    ];
    if (file) {
        if ((file === null || file === void 0 ? void 0 : file.size) > maxSize) {
            errors.push("File size must be less than 5MB");
        }
        if (!allowedTypes.includes(file === null || file === void 0 ? void 0 : file.mimetype)) {
            errors.push("File type not allowed.");
        }
    }
    return errors;
};
module.exports = createCoreController("api::contact-form.contact-form", () => ({
    async findFolder(folderName = "", parentId = null) {
        try {
            const existingFolders = await strapi.entityService.findMany("plugin::upload.folder", {
                filters: {
                    name: folderName,
                    parent: parentId,
                },
                populate: ["parent"],
            });
            if (existingFolders.length > 0) {
                return existingFolders[0];
            }
            else {
                return null;
            }
        }
        catch (error) {
            strapi.log.error("Error finding folder:", error);
            return null;
        }
    },
    async create(ctx) {
        try {
            const { data } = ctx.request.body;
            const files = ctx.request.files;
            if (!data) {
                ctx.throw(400, 'Missing "data" in request body');
            }
            // Parse form data
            const parsedData = typeof data === "string" ? JSON.parse(data) : data;
            const attachment = (files === null || files === void 0 ? void 0 : files["files.attachment"]) || (files === null || files === void 0 ? void 0 : files.attachment);
            // Handle file upload if present
            let uploadedFile = null;
            if (attachment) {
                const fileErrors = validateFileUpload(attachment);
                if (fileErrors.length > 0) {
                    ctx.throw(400, fileErrors.join("; "));
                }
                try {
                    const folderName = process.env.CONTACT_FORM_FOLDER_NAME || "LeadForms";
                    const folderResult = await this.findFolder(folderName);
                    const folderId = folderResult ? folderResult.id : null;
                    const fileInfo = {
                        alternativeText: attachment === null || attachment === void 0 ? void 0 : attachment.originalFilename,
                        caption: attachment === null || attachment === void 0 ? void 0 : attachment.originalFilename,
                        name: attachment === null || attachment === void 0 ? void 0 : attachment.originalFilename,
                        ...(folderId && { folder: String(folderId) }),
                    };
                    const uploadedFiles = await strapi.plugins.upload.services.upload.upload({
                        data: { fileInfo },
                        files: attachment,
                    });
                    uploadedFile = uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles[0];
                    strapi.log.info(`File uploaded successfully: ${uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name} (ID: ${uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.id})`);
                }
                catch (uploadError) {
                    strapi.log.error("File upload failed:", uploadError);
                    return ctx.throw(500, "Failed to upload attachment");
                }
            }
            // Prepare entry data
            const entryData = {
                ...parsedData,
                attachment: (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.id) || null,
            };
            // Create contact form entry
            const entry = await strapi.entityService.create("api::contact-form.contact-form", {
                data: entryData,
                populate: ["attachment"], // Populate attachment details in response
            });
            // Log successful creation
            strapi.log.info(`Contact form created successfully: ${entry === null || entry === void 0 ? void 0 : entry.id}`);
            // Return response
            ctx.body = entry;
        }
        catch (err) {
            strapi.log.error("Contact form creation failed:", {
                error: err.message,
                stack: err.stack,
                requestBody: ctx.request.body,
                files: ctx.request.files ? Object.keys(ctx.request.files) : [],
            });
            ctx.status = 400;
            ctx.body = { error: "Error creating entry", details: err.message };
        }
    },
}));
