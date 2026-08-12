// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "AgendaOK | Tu negocio con turnos online en 5 minutos",
    template: "%s | AgendaOK", // Para páginas internas como /terminos
  },
  description:
    "Reservas 24/7, cobro de señas automático y recordatorios por WhatsApp. Dejá de perder tiempo coordinando turnos. Probá 30 días gratis.",
  keywords: [
    "sistema de turnos",
    "agenda online",
    "turnos peluquería",
    "turnos barbería",
    "gestión de reservas",
    "turnos consultorio",
    "agenda para negocios",
  ],
  authors: [{ name: "AgendaOK" }],
  openGraph: {
    title: "AgendaOK | Tu negocio con turnos online en 5 minutos",
    description:
      "Reservas 24/7, cobro de señas automático y recordatorios por WhatsApp. Probá 30 días gratis.",
    url: "https://agendaok.com.ar",
    siteName: "AgendaOK",
    locale: "es_AR",
    type: "website",
      images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgendaOK - Sistema de turnos online para negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgendaOK | Tu negocio con turnos online en 5 minutos",
    description:
      "Reservas 24/7, cobro de señas automático y recordatorios por WhatsApp.",
      images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar /> {/* 👈 Lo agregamos aquí */}
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
