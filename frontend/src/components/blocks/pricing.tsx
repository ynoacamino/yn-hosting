import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { BuyButton } from "@/components/ui/buy-button";
import Cube3d from "@/components/ui/cube3d";
import { Glass } from "@/components/ui/glass";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { PreciosSections } from "@/config/pages";
import { IconMapper } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { PageBlocksPricing } from "../../../tina/__generated__/types";
import { iconSchema } from "../../../tina/fields/icon";

export const pricingBlockSchema: Template = {
  name: "pricing",
  label: "Planes de Precios",
  ui: {
    previewSrc: "/blocks/stats.png",
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
      name: "discountText",
      label: "Texto Descuento Global (ej: 10%)",
      type: "string",
    },
    {
      name: "plans",
      label: "Planes",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Plan"} - S/${item?.price || 0}`,
        }),
      },
      fields: [
        {
          name: "name",
          label: "Nombre del Plan",
          type: "string",
        },
        {
          name: "description",
          label: "Descripción",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "price",
          label: "Precio Mensual (S/)",
          type: "number",
        },
        {
          name: "discount",
          label: "Texto Descuento de Tarjeta (ej: 10% DTO.)",
          type: "string",
        },
        {
          name: "block",
          label: "Textura Cubo 3D",
          type: "image",
        },
        {
          name: "features",
          label: "Características del Plan",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => ({ label: item?.feature || "Característica" }),
          },
          fields: [
            {
              name: "feature",
              label: "Característica",
              type: "string",
            },
            iconSchema,
          ],
        },
      ],
    },
  ],
};

export function PricingBlock(props: PageBlocksPricing) {
  const {
    titleLine1 = "ELIGE EL MEJOR",
    titleLine2 = "PARA TI",
    discountText = "10%",
    plans = [],
  } = props;

  return (
    <Section
      id={PreciosSections.ELIGUE_EL_MEJOR}
      className="my-20 flex flex-col gap-16"
    >
      <Title>
        <span data-tina-field={tinaField(props, "titleLine1")}>
          {titleLine1}
        </span>
        <span data-tina-field={tinaField(props, "titleLine2")}>
          {titleLine2}
        </span>
      </Title>

      {plans && (
        <div
          data-tina-field={tinaField(props, "plans")}
          className="glassmorphism relative grid w-full gap-5 overflow-hidden rounded-lg p-5 md:grid-cols-3 lg:gap-6 lg:p-6"
        >
          <div className="glassmorphism-hiron absolute top-0 left-0 h-full w-full opacity-0" />
          {plans.map((plan, idx) => {
            if (!plan) return null;
            const discountLabel = plan.discount || `${discountText} DTO.`;

            return (
              <Glass
                key={plan.name || idx}
                className={cn(
                  "relative flex flex-col items-center justify-between gap-16 py-12",
                  {
                    "group-hover/Hierro:opacity-100": plan.name === "Hierro",
                    "group-hover/Diamante:opacity-100":
                      plan.name === "Diamante",
                    "group-hover/Netherita:opacity-100":
                      plan.name === "Netherita",
                  },
                )}
              >
                {discountLabel && (
                  <div
                    className="absolute top-0 right-0 flex h-22 w-34 items-start justify-center rounded-tr-lg bg-red-600/90 font-bold text-white"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                  >
                    <div className="absolute top-1 right-2 text-end">
                      <p className="font-black text-2xl">{discountText}</p>
                      <p className="text-sm">DTO.</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  <h3 className="text-center font-black text-4xl uppercase">
                    {plan.name}
                  </h3>
                  <div
                    className="h-20 text-center text-foreground/70"
                    dangerouslySetInnerHTML={{ __html: plan.description || "" }}
                  />
                  <div className="my-14 flex justify-center">
                    <span className="text-4xl">S/</span>
                    <span className="font-bold text-8xl">{plan.price}</span>
                    <span className="flex items-end text-xl">/mes</span>
                  </div>

                  {plan.features && (
                    <div className="flex w-fit flex-col items-start justify-start gap-5">
                      {plan.features.map((feat, fIdx) => {
                        if (!feat) return null;
                        return (
                          <div
                            key={feat.feature || fIdx}
                            className="flex items-center gap-3"
                          >
                            <IconMapper
                              className="size-7 min-w-min stroke-2"
                              name={feat.icon}
                            />
                            <span>{feat.feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="grid gap-10">
                  {plan.block && <Cube3d texture={plan.block} />}
                  <BuyButton />
                </div>
              </Glass>
            );
          })}
        </div>
      )}
    </Section>
  );
}
