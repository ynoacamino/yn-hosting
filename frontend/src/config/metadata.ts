import type { Metadata } from "next";

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
    url: "https://enderhost.net.pe",
    siteName: "ENDER HOSTING",
    images: [
      {
        url: "https://ynoa-uploader.ynoacamino.me/uploads/1760851208_logo-emblema.png",
        width: 1080,
        height: 726,
        alt: "ENDER HOSTING Open Graph Image",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  metadataBase: new URL("https://enderhost.net.pe"),
  alternates: { canonical: "https://enderhost.net.pe" },
  robots: {
    index: true,
    follow: true,
  },
};
