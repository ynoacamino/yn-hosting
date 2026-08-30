"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { useDevice } from "@/components/providers/DeviceProvider";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { InicioSections } from "@/config/pages";
import type { PageBlocksExtendDescription } from "../../../tina/__generated__/types";

export const extendDescriptionBlockSchema: Template = {
  name: "extendDescription",
  label: "Descripción Extendida / Características",
  ui: {
    previewSrc: "/blocks/content.png",
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
      name: "items",
      label: "Secciones Explicativas",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Característica" }),
      },
      fields: [
        {
          name: "title",
          label: "Título",
          type: "string",
        },
        {
          name: "content",
          label: "Contenido",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "image",
          label: "Imagen",
          type: "image",
        },
      ],
    },
  ],
};

export function ExtendDescriptionBlock(props: PageBlocksExtendDescription) {
  const {
    titleLine1 = "Características de",
    titleLine2 = "nuestros servidores",
    items = [],
  } = props;

  const { isMobile } = useDevice();

  return (
    <Section
      id={InicioSections.CARACTERISTICAS}
      className="my-32 flex flex-col gap-14"
    >
      <Title className="flex flex-col">
        <span data-tina-field={tinaField(props, "titleLine1")}>
          {titleLine1}
        </span>
        <span data-tina-field={tinaField(props, "titleLine2")}>
          {titleLine2}
        </span>
      </Title>

      {items && items.length > 0 && (
        <div
          data-tina-field={tinaField(props, "items")}
          className="flex w-full flex-col gap-24"
        >
          {items.map((item, idx) => {
            if (!item) return null;
            return (
              <motion.div
                key={item.title || idx}
                className="grid w-full items-center gap-10 md:grid-cols-2"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ amount: isMobile ? 0.24 : 0.35, once: true }}
              >
                <div className="flex flex-col gap-6 md:gap-8">
                  <h3 className="font-black text-2xl uppercase md:text-3xl">
                    {item.title}
                  </h3>
                  <div
                    className="flex flex-col gap-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.content || "" }}
                  />
                </div>
                {item.image && (
                  <Image
                    className="glassmorphism w-full max-w-lg justify-self-center rounded-xl"
                    src={item.image}
                    alt={item.title || ""}
                    width={512}
                    height={320}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </Section>
  );
}
