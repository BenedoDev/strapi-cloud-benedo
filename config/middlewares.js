module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": [
            "https://cdn.ckeditor.com",
            "https://strapi.benedo.com.br",
          ],
          "connect-src": ["https://proxy-event.ckeditor.com"],
        },
      },
    },
  },
];
