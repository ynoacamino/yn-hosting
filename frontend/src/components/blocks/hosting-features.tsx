"use client";

import { motion } from "motion/react";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { Glass } from "@/components/ui/glass";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { InicioSections } from "@/config/pages";
import { IconMapper } from "@/lib/icons";
import type { PageBlocksHostingFeatures } from "../../../tina/__generated__/types";
import { iconSchema } from "../../../tina/fields/icon";

export const hostingFeaturesBlockSchema: Template = {
  name: "hostingFeatures",
  label: "Hosting Features",
  ui: {
    previewSrc: "/blocks/features.png",
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
      name: "features",
      label: "Lista de Características",
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
          label: "Descripción",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        iconSchema,
      ],
    },
  ],
};

export function HostingFeaturesBlock(props: PageBlocksHostingFeatures) {
  const {
    titleLine1 = "Características que",
    titleLine2 = "hacen la diferencia",
    features = [],
  } = props;

  return (
    <Section
      id={InicioSections.CREA_TU_SERVIDOR}
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

      {features && (
        <div
          data-tina-field={tinaField(props, "features")}
          className="glassmorphism grid w-full gap-6 rounded-xl p-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8"
        >
          {features.map((feature, idx) => {
            if (!feature) return null;
            return (
              <Glass
                key={feature.title || idx}
                className="flex flex-col gap-4"
                paddingBottom="xl"
                asChild
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                >
                  <IconMapper className="mb-3 size-16" name={feature.icon} />
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p>{feature.content}</p>
                </motion.div>
              </Glass>
            );
          })}
        </div>
      )}
    </Section>
  );
}
