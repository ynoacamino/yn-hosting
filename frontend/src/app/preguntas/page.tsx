import type { Metadata } from "next";
import Preguntas from "@/components/pages/preguntas/preguntas";
import { PREGUNTAS } from "@/config/content/preguntas";
import { generateFAQSchema } from "@/config/structured-data";

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

export default function PreguntasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\u003c"),
        }}
      />
      <Preguntas />
    </>
  );
}
