import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/layout/footer/Footer";
import Gradient from "@/components/layout/global/gradient";
import Header from "@/components/layout/header/Header";
import WhatsappButton from "@/components/layout/WhatsappButton";
import { DeviceProvider } from "@/components/providers/DeviceProvider";
import TsParticlesProvider from "@/components/providers/ParticlesProvider";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";
import { defaultMetadataConfig } from "@/config/metadata";
import { organizationSchema, websiteSchema } from "@/config/structured-data";
import client from "../../tina/__generated__/client";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    let title = "EnderHost | Hosting de Minecraft";
    let description =
      "Servidores de Minecraft en Perú y Latinoamérica con alto rendimiento y baja latencia.";

    try {
      const globalData = await client.queries.global({
        relativePath: "index.json",
      });
      if (globalData?.data?.global?.title) title = globalData.data.global.title;
      if (globalData?.data?.global?.description)
        description = globalData.data.global.description;
    } catch {
      // fallback
    }

    return {
      ...defaultMetadataConfig,
      openGraph: {
        title,
        description,
        ...defaultMetadataConfig.openGraph,
      },
      title,
      description,
    };
  } catch {
    return {
      ...defaultMetadataConfig,
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleAnalytics gaId="G-D2X23339MH" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\u003c"),
        }}
      />
      <body
        className={`${inter.variable} flex flex-col items-center overflow-x-hidden font-sans antialiased`}
      >
        <ProgressBarProvider>
          <DeviceProvider>
            <TsParticlesProvider>
              <Gradient />
              <WhatsappButton />
              <Header />
              <main className="flex w-full flex-col items-center overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </TsParticlesProvider>
          </DeviceProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
