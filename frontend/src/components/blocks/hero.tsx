"use client";

import { IconCircleCheckFilled } from "@tabler/icons-react";
import type { PageBlocksHero } from "@tina/__generated__/types";
import { motion } from "motion/react";
import Link from "next/link";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { InicioSections } from "@/config/pages";

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero Section",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      title: "Hosting de servidores de Minecraft",
      heroFeatures: [
        "Servidores 24/7",
        "Baja latencia",
        "Soporte dedicado",
        "Sin lag",
      ],
      primaryButtonText: "Ver planes",
      primaryButtonLink: "/precios",
      secondaryButtonText: "¡Pruébalo gratis!",
      secondaryButtonLink: "/prueba-gratuita",
    },
  },
  fields: [
    {
      name: "title",
      label: "Título Principal",
      type: "string",
    },
    {
      name: "heroFeatures",
      label: "Etiquetas / Features",
      type: "string",
      list: true,
    },
    {
      name: "primaryButtonText",
      label: "Texto Botón Principal",
      type: "string",
    },
    {
      name: "primaryButtonLink",
      label: "Enlace Botón Principal",
      type: "string",
    },
    {
      name: "secondaryButtonText",
      label: "Texto Botón Secundario",
      type: "string",
    },
    {
      name: "secondaryButtonLink",
      label: "Enlace Botón Secundario",
      type: "string",
    },
  ],
};

export function HeroBlock(props: PageBlocksHero) {
  const {
    title = "Hosting de servidores de Minecraft",
    heroFeatures = [
      "Servidores 24/7",
      "Baja latencia",
      "Soporte dedicado",
      "Sin lag",
    ],
    primaryButtonText = "Ver planes",
    primaryButtonLink = "/precios",
    secondaryButtonText = "¡Pruébalo gratis!",
    secondaryButtonLink = "/prueba-gratuita",
  } = props;

  return (
    <Section
      id={InicioSections.COMENZAR_AHORA}
      className="my-20 flex flex-col md:mt-32 md:mb-20"
    >
      <div className="flex flex-col items-center gap-10 md:gap-12">
        <div className="relative flex items-center justify-center">
          <h1
            data-tina-field={tinaField(props, "title")}
            className="z-10 flex w-full max-w-2xl flex-col gap-4 text-center font-black text-5xl uppercase tracking-wider md:text-6xl"
          >
            {title}
          </h1>
        </div>

        {heroFeatures && heroFeatures.length > 0 && (
          <div
            data-tina-field={tinaField(props, "heroFeatures")}
            className="flex w-full max-w-xl flex-wrap justify-center gap-x-12 gap-y-3"
          >
            {heroFeatures.map((feature, idx) => (
              <motion.span
                key={idx}
                className="flex min-w-fit gap-2"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 + 0.3 }}
              >
                <IconCircleCheckFilled className="fill-primary" />
                {feature}
              </motion.span>
            ))}
          </div>
        )}

        <div className="grid w-full max-w-88 grid-cols-2 gap-6">
          {primaryButtonText && primaryButtonLink && (
            <Button size="lg" className="w-full" variant="secondary" asChild>
              <Link
                data-tina-field={tinaField(props, "primaryButtonText")}
                href={primaryButtonLink}
              >
                {primaryButtonText}
              </Link>
            </Button>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <Button size="lg" asChild>
              <Link
                data-tina-field={tinaField(props, "secondaryButtonText")}
                href={secondaryButtonLink}
              >
                {secondaryButtonText}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
