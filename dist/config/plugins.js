"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    seo: {
        enabled: true,
    },
    publisher: {
        enabled: true,
        config: {
            // แสดงปุ่ม/ฟีเจอร์ Publisher แค่ใน 2 content types นี้
            contentTypes: [
                'api::article.article',
                'api::banner.banner',
            ],
            // (ออปชันเสริม) hook ก่อน/หลัง publish-unpublish
            hooks: {
                beforePublish: async ({ uid, entity, strapi }) => {
                    // return false เพื่อบล็อกการ publish ได้
                },
            },
        },
    },
    'export-csv': {
        enabled: true,
        config: {
            // Configuration options for the export CSV plugin
            batchSize: 1000, // Number of records to process in each batch
            excludedColumns: ['id', 'createdAt', 'updatedAt'], // Columns to exclude from export
            dateFormat: 'YYYY-MM-DD', // Date format for exported dates
        },
    },
});
