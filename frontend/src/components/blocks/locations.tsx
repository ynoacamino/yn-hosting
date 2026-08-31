import type { PageBlocksLocations } from "@tina/__generated__/types";
import Image from "next/image";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { Button } from "@/components/ui/button";
import { BuyButton } from "@/components/ui/buy-button";
import Cube3d from "@/components/ui/cube3d";
import { Glass } from "@/components/ui/glass";
import Section from "@/components/ui/section";
import { TwoLineTitle } from "@/components/ui/two-line-title";
import { InicioSections } from "@/config/pages";

export const locationsBlockSchema: Template = {
  name: "locations",
  label: "Ubicaciones de Servidores",
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
      name: "locations",
      label: "Lista de Ubicaciones",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || "Ubicación" }),
      },
      fields: [
        {
          name: "name",
          label: "Nombre Ubicación",
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
          name: "latency",
          label: "Latencia (ms)",
          type: "number",
        },
        {
          name: "qualification",
          label: "Calificación (1-5 estrellas)",
          type: "number",
        },
        {
          name: "mc_icon",
          label: "Icono de Minecraft",
          type: "image",
        },
        {
          name: "block",
          label: "Textura Cubo 3D",
          type: "image",
        },
        {
          name: "isExternal",
          label: "¿Es proveedor externo?",
          type: "boolean",
        },
      ],
    },
  ],
};

export function LocationsBlock(props: PageBlocksLocations) {
  const {
    titleLine1 = "Descubre nuestras",
    titleLine2 = "ubicaciones",
    locations = [],
  } = props;

  const validLocations = locations?.filter(Boolean) || [];
  const ownLocations = validLocations.filter((l) => !l?.isExternal);
  const externalLocations = validLocations.filter((l) => l?.isExternal);

  return (
    <Section
      id={InicioSections.DESCUBRE_NUESTRAS_UBICACIONES}
      className="my-32 flex flex-col gap-14"
    >
      <TwoLineTitle
        line1={titleLine1}
        line2={titleLine2}
        className="flex flex-col"
      />

      <div
        data-tina-field={tinaField(props, "locations")}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {ownLocations.length > 0 && (
          <div
            className={`glassmorphism grid w-full gap-6 rounded-xl p-6 sm:grid-cols-2 md:gap-6 md:p-6 ${
              externalLocations.length > 0
                ? "col-span-2"
                : "col-span-3 sm:grid-cols-3"
            }`}
          >
            {ownLocations.map((loc) => {
              if (!loc) return null;
              return (
                <div key={loc.name} className="flex flex-col gap-4">
                  <Glass className="flex justify-between gap-4 p-2">
                    {loc.mc_icon && (
                      <Image
                        src={loc.mc_icon}
                        alt={loc.name || ""}
                        width={64}
                        height={64}
                        className="aspect-square w-16 rounded-md"
                      />
                    )}
                    <h3 className="flex w-full items-center justify-center text-center font-black text-xl uppercase">
                      {loc.name}
                    </h3>
                  </Glass>
                  <Glass
                    className="flex flex-1 flex-col gap-4"
                    paddingBottom="xl"
                  >
                    <div
                      className="prose-zinc text-foreground/80"
                      dangerouslySetInnerHTML={{
                        __html: loc.description || "",
                      }}
                    />
                  </Glass>
                  <Glass className="flex justify-between gap-4">
                    <span className="mb-1">Latencia:</span>
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-9"
                        src="/uploads/ping-local.png"
                        alt="ping"
                        width={36}
                        height={36}
                      />
                      <span>{loc.latency || 25} ms</span>
                    </div>
                  </Glass>
                  <Glass className="flex justify-between gap-4">
                    <span>Calificación:</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: loc.qualification || 5 }).map(
                        (_, index) => (
                          <Image
                            key={`${loc.name}-star-${index}`}
                            className="w-7"
                            src="/uploads/star.png"
                            alt="star"
                            width={28}
                            height={28}
                          />
                        ),
                      )}
                    </div>
                  </Glass>
                  <Glass className="flex flex-col items-center justify-center gap-10 py-12">
                    {loc.block && <Cube3d texture={loc.block} />}
                    <BuyButton />
                  </Glass>
                </div>
              );
            })}
          </div>
        )}

        {externalLocations.map((loc) => {
          if (!loc) return null;
          return (
            <div
              key={loc.name}
              className="glassmorphism-diamond grid w-full gap-6 rounded-xl p-6"
            >
              <div className="flex flex-col gap-4">
                <Glass className="flex justify-between gap-4 p-2">
                  {loc.mc_icon && (
                    <Image
                      src={loc.mc_icon}
                      alt={loc.name || ""}
                      width={64}
                      height={64}
                      className="aspect-square w-16 rounded-md"
                    />
                  )}
                  <h3 className="flex w-full items-center justify-center text-center font-black text-xl uppercase">
                    {loc.name}
                  </h3>
                </Glass>
                <Glass
                  className="flex flex-1 flex-col gap-4"
                  paddingBottom="xl"
                >
                  <div
                    className="prose-zinc text-foreground/80"
                    dangerouslySetInnerHTML={{
                      __html: loc.description || "",
                    }}
                  />
                </Glass>
                <Glass className="flex justify-between gap-4">
                  <span className="mb-1">Latencia:</span>
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-9"
                      src="/uploads/ping-external.png"
                      alt="ping"
                      width={36}
                      height={36}
                    />
                    <span>{loc.latency || 80} ms</span>
                  </div>
                </Glass>
                <Glass className="flex justify-between gap-4">
                  <span>Calificación:</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: loc.qualification || 4 }).map(
                      (_, index) => (
                        <Image
                          key={`${loc.name}-star-${index}`}
                          className="w-7"
                          src="/uploads/star.png"
                          alt="star"
                          width={28}
                          height={28}
                        />
                      ),
                    )}
                  </div>
                </Glass>
                <Glass className="flex flex-col items-center justify-center gap-10 py-12">
                  {loc.block && <Cube3d texture={loc.block} />}
                  <Button
                    size="lg"
                    className="mt-6 w-full opacity-0 disabled:opacity-0"
                    disabled
                  >
                    Comprar ahora
                  </Button>
                </Glass>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
