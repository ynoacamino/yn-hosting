import type { Metadata } from "next";
import { PREGUNTAS } from "@/config/content/preguntas";
import { generateFAQSchema } from "@/config/structured-data";
import client from "../../../tina/__generated__/client";
import ClientPage from "../[...urlSegments]/client-page";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | EnderHost",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de hosting. Desde la configuración hasta la gestión de tu cuenta, estamos aquí para ayudarte.",
};

const allPreguntas = [
  ...PREGUNTAS.SOBRE_EL_JUEGO,
  ...PREGUNTAS.SOBRE_EL_HOSTING,
  ...PREGUNTAS.GENERALES,
];

const faqSchema = generateFAQSchema(allPreguntas);

export const revalidate = 60;

export default async function PreguntasPage() {
  const data = await client.queries.page({
    relativePath: "preguntas.mdx",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\u003c"),
        }}
      />
      <ClientPage {...data} />
    </>
  );
}
