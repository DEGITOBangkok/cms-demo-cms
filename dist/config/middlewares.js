"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'img-src': ["*", "data:", "blob:"],
                    'media-src': ["*", "data:", "blob:"],
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            headers: '*',
            origin: '*', // Allow all origins for development
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
