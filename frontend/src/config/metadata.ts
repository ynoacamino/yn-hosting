import type { Metadata } from "next";
import { DEFAULT_LOGO_PATH, SITE_NAME, SITE_URL } from "@/config/variables";

export const defaultMetadataConfig: Metadata = {
  keywords: [
    "Hosting de Minecraft en Perú",
    "Servidores de Minecraft Perú",
    "Hosting Minecraft Perú",
    "Alquiler de servidores Minecraft Perú",
    "Servidor de Minecraft económico Perú",
    "Hosting para juegos en Perú",
    "Hosting rápido y estable en Perú",
    "Hosting peruano para Minecraft",
    "Mejor hosting de Minecraft Perú",
    "Servidor de Minecraft con buen ping Perú",
  ],
  openGraph: {
    url: SITE_URL,
    siteName: SITE_NAME.toUpperCase(),
    images: [
      {
        url: DEFAULT_LOGO_PATH,
        width: 1080,
        height: 726,
        alt: `${SITE_NAME} Open Graph Image`,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
  },
};
