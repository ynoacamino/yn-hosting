import type { Metadata } from "next";
import { generateFAQSchema } from "@/config/structured-data";
import client from "../../../tina/__generated__/client";
import ClientPage from "../[...urlSegments]/client-page";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | EnderHost",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de hosting. Desde la configuración hasta la gestión de tu cuenta, estamos aquí para ayudarte.",
};

export const revalidate = 60;

export default async function PreguntasPage() {
  const data = await client.queries.page({
    relativePath: "preguntas.mdx",
  });

  const allPreguntas: Array<{ question: string; answer: string }> = [];
  const blocks = data.data.page.blocks || [];
  for (const block of blocks) {
    if (
      block &&
      "__typename" in block &&
      block.__typename === "PageBlocksFaq" &&
      "sections" in block &&
      block.sections
    ) {
      for (const section of block.sections) {
        if (section?.questions) {
          for (const q of section.questions) {
            if (q?.question && q?.answer) {
              allPreguntas.push({
                question: q.question,
                answer: q.answer,
              });
            }
          }
        }
      }
    }
  }

  const faqSchema = generateFAQSchema(allPreguntas);

  return (
    <>
      {allPreguntas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\u003c"),
          }}
        />
      )}
      <ClientPage {...data} />
    </>
  );
}
