// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // No queremos que Google indexe nuestras APIs
    },
    sitemap: "https://agendaok.com.ar/sitemap.xml",
  };
}