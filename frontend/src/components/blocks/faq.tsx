"use client";

import { IconArrowRight } from "@tabler/icons-react";
import type { PageBlocksFaq } from "@tina/__generated__/types";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Masonry from "react-smart-masonry";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import Section from "@/components/ui/section";
import { TwoLineTitle } from "@/components/ui/two-line-title";
import { InicioSections } from "@/config/pages";
import { sf } from "@/lib/utils";

const breakpoints = { mobile: 0, desktop: 768 };

export const faqBlockSchema: Template = {
  name: "faq",
  label: "Preguntas Frecuentes",
  ui: {
    previewSrc: "/blocks/callout.png",
  },
  fields: [
    {
      name: "titleLine1",
      label: "Título Línea 1",
      type: "string",
    },
    {
      name: "titleLine2",
      label: "Título Línea 2",
      type: "string",
    },
    {
      name: "variant",
      label: "Modo de Visualización",
      type: "string",
      options: [
        { label: "Automático (según página)", value: "auto" },
        { label: "Resumen (Tarjetas enlace para Inicio)", value: "preview" },
        {
          label: "Completo (Masonry por Categorías para /preguntas)",
          value: "full",
        },
      ],
    },
    {
      name: "sections",
      label: "Categorías de Preguntas",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Categoría" }),
      },
      fields: [
        {
          name: "title",
          label: "Nombre Categoría",
          type: "string",
        },
        {
          name: "questions",
          label: "Preguntas",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => ({ label: item?.question || "Pregunta" }),
          },
          fields: [
            {
              name: "question",
              label: "Pregunta",
              type: "string",
            },
            {
              name: "answer",
              label: "Respuesta",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
            {
              name: "video",
              label: "Video (URL opcional)",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export function FaqBlock(props: PageBlocksFaq) {
  const {
    titleLine1 = "Preguntas y respuestas",
    titleLine2 = "frecuentes",
    sections = [],
    variant = "auto",
  } = props;

  const pathname = usePathname();
  const isPreview =
    variant === "preview" ||
    (variant !== "full" && (!pathname || pathname === "/"));

  if (isPreview) {
    const importantQuestions = (sections || []).reduce<
      Array<{
        question?: string | null;
        answer?: string | null;
        video?: string | null;
      }>
    >((acc, section) => {
      const sectionQuestions = (section?.questions || [])
        .slice(0, 2)
        .filter((q): q is NonNullable<typeof q> => Boolean(q));
      return acc.concat(sectionQuestions);
    }, []);

    return (
      <Section
        id={InicioSections.PREGUNTAS_FRECUENTES}
        className="my-32 flex flex-col gap-14"
      >
        <TwoLineTitle
          line1={titleLine1}
          line2={titleLine2}
          className="flex flex-col"
        />

        {importantQuestions && (
          <div
            data-tina-field={tinaField(props, "sections")}
            className="grid w-full gap-6 md:grid-cols-2 md:gap-8"
          >
            {importantQuestions.map((q, idx) => {
              if (!q?.question) return null;
              return (
                <motion.span
                  key={q.question || idx}
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  viewport={{ amount: 1, once: true }}
                  className="overflow-hidden rounded-xl border-2 border-[#24282F] bg-[#171B22]"
                  whileHover={{ borderColor: "#616671" }}
                >
                  <Link
                    href={`/preguntas#${sf(q.question)}`}
                    className="flex items-center gap-4 p-4 font-semibold text-lg md:p-6 md:text-xl"
                  >
                    <span className="w-full">{q.question}</span>
                    <IconArrowRight className="ml-2 size-10 opacity-0" />
                  </Link>
                </motion.span>
              );
            })}
          </div>
        )}
      </Section>
    );
  }

  return (
    <div className="flex w-full flex-col gap-10">
      {sections?.map((section, sIdx) => {
        if (!section?.title) return null;
        return (
          <Section
            key={section.title || sIdx}
            className="my-10 flex flex-col gap-16"
            id={sf(section.title)}
          >
            <h1 className="grid w-full max-w-lg rounded-lg py-4 text-center font-black text-4xl text-foreground uppercase md:text-[2.65rem]">
              {section.title}
            </h1>

            <Masonry
              columns={{ mobile: 1, desktop: 2 }}
              gap={{ mobile: 20, desktop: 24 }}
              breakpoints={breakpoints}
              autoArrange
            >
              {section.questions?.map((q, qIdx) => {
                if (!q?.question) return null;
                return (
                  <motion.div
                    key={q.question || qIdx}
                    className="flex max-h-max w-full flex-col gap-8 rounded-xl border-2 border-[#24282F] bg-[#171B22] p-6 text-xl"
                    whileHover={{ borderColor: "#616671" }}
                    id={sf(q.question)}
                  >
                    <Link
                      href={`/preguntas#${sf(q.question)}`}
                      className="w-full font-semibold text-2xl hover:underline"
                      id={sf(q.question)}
                    >
                      {q.question}
                    </Link>
                    <div
                      className="prose-img:my-2 flex prose-img:aspect-video flex-col gap-6 prose-img:rounded-lg prose-img:bg-muted-foreground/5 text-base text-foreground/90 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: q.answer || "" }}
                    />
                  </motion.div>
                );
              })}
            </Masonry>
          </Section>
        );
      })}
    </div>
  );
}
