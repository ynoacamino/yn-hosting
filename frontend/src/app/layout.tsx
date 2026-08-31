import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/layout/footer/Footer";
import Gradient from "@/components/layout/gradient";
import Header from "@/components/layout/header/Header";
import WhatsappButton from "@/components/layout/WhatsappButton";
import { DeviceProvider } from "@/components/providers/DeviceProvider";
import TsParticlesProvider from "@/components/providers/ParticlesProvider";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";
import { defaultMetadataConfig } from "@/config/metadata";
import { organizationSchema, websiteSchema } from "@/config/structured-data";
import { GA_ID, SITE_DESCRIPTION } from "@/config/variables";
import { getGlobalData } from "@/services/cms";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { title, description } = await getGlobalData();

    return {
      ...defaultMetadataConfig,
      openGraph: {
        title,
        description: description || SITE_DESCRIPTION,
        ...defaultMetadataConfig.openGraph,
      },
      title,
      description: description || SITE_DESCRIPTION,
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
      <GoogleAnalytics gaId={GA_ID} />
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
