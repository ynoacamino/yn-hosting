import Image from "next/image";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { InicioSections } from "@/config/pages";
import { IconMapper } from "@/lib/icons";
import type { PageBlocksVersions } from "../../../tina/__generated__/types";
import { iconSchema } from "../../../tina/fields/icon";

export const versionsBlockSchema: Template = {
  name: "versions",
  label: "Versiones y Modloaders",
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
      name: "mainCards",
      label: "Tarjetas Principales (Java / Bedrock)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Tarjeta" }),
      },
      fields: [
        {
          name: "title",
          label: "Título",
          type: "string",
        },
        {
          name: "image",
          label: "Imagen",
          type: "image",
        },
      ],
    },
    {
      name: "versionFeatures",
      label: "Modloaders / Versiones",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Versión" }),
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

export function VersionsBlock(props: PageBlocksVersions) {
  const {
    titleLine1 = "Soportamos todos",
    titleLine2 = "los minecraft's",
    mainCards = [
      {
        image: "/uploads/minecraft-java.png",
        title: "Minecraft Java",
      },
      {
        image: "/uploads/minecraft-bedrock.png",
        title: "Minecraft Bedrock",
      },
    ],
    versionFeatures = [],
  } = props;

  return (
    <Section
      id={InicioSections.SOPORTAMOS_TODOS_LOS_MINECRAFTS}
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

      <div className="flex w-full flex-col gap-8">
        {mainCards && mainCards.length > 0 && (
          <div
            data-tina-field={tinaField(props, "mainCards")}
            className="grid w-full gap-8 sm:grid-cols-2"
          >
            {mainCards.map((card, idx) => {
              if (!card) return null;
              return (
                <div
                  key={card.title || idx}
                  className="flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-[#24282F] bg-[#171B22] p-6 transition-colors hover:border-[#616671] md:gap-8 md:p-8"
                >
                  {card.image && (
                    <Image
                      className="rounded-xl"
                      src={card.image}
                      alt={card.title || ""}
                      width={384}
                      height={256}
                    />
                  )}
                  <h3 className="w-full max-w-xs text-center font-black text-2xl uppercase md:text-4xl">
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>
        )}

        {versionFeatures && versionFeatures.length > 0 && (
          <div
            data-tina-field={tinaField(props, "versionFeatures")}
            className="grid w-full gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            {versionFeatures.map((feat, idx) => {
              if (!feat) return null;
              return (
                <div
                  key={feat.title || idx}
                  className="relative flex flex-col gap-3 rounded-xl border-2 border-[#24282F] bg-[#171B22] p-4 pb-10 transition-colors hover:border-[#616671] md:gap-4 md:p-6"
                >
                  <IconMapper
                    className="mb-3 size-11 md:size-16"
                    name={feat.icon}
                  />
                  <h3 className="font-semibold text-xl">{feat.title}</h3>
                  <p>{feat.content}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
