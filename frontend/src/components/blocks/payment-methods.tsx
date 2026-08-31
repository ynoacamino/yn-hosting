"use client";

import type { PageBlocksPaymentMethods } from "@tina/__generated__/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import ChatBubble from "@/components/ui/chat-bubble";
import Section from "@/components/ui/section";
import { Step } from "@/components/ui/step";
import { TwoLineTitle } from "@/components/ui/two-line-title";
import { PreciosSections } from "@/config/pages";

const messagesBoubleUser = [
  "Me gusto mucho la prueba gratuita y quiero comprar un servidor, ¿cuales son los metodos de pago?",
];

const messagesBoubleSupport = [
  "Nos alegra mucho que te haya gustado la prueba gratuita 🥳",
  "Aceptamos todas las billeteras digitales:",
  "- Yape",
  "- Plin",
  "- Lemons cash",
  "Puedes elegir el que más te convenga 🙌",
];

const messagesBoubleUserLength = messagesBoubleUser.reduce(
  (acc, curr) => acc + curr.length,
  0,
);

function MetodosDePagoClient() {
  const [startAnim, setStartAnim] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnim(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-24 md:gap-28">
      <Step
        index={1}
        title="Escribenos preguntando por nuestros métodos de pago"
      >
        <div className="flex min-h-52 items-start justify-end md:min-h-46">
          <ChatBubble
            messages={messagesBoubleUser}
            timestamp="2:15"
            type="user"
            startAnimation={startAnim}
          />
        </div>
      </Step>
      <Step
        index={2}
        title="Te responderemos con todos los métodos de pago disponibles"
      >
        <div className="flex min-h-58 items-start justify-start">
          <ChatBubble
            messages={messagesBoubleSupport}
            timestamp="2:17"
            type="support"
            delay={0.5 + (messagesBoubleUserLength * 50) / 1000 + 0.2}
            messagesDelay={800 + messagesBoubleUserLength * 50 + 800}
            startAnimation={startAnim}
          />
        </div>
      </Step>
    </div>
  );
}

export const paymentMethodsBlockSchema: Template = {
  name: "paymentMethods",
  label: "Métodos de Pago",
  ui: {
    previewSrc: "/blocks/callout.png",
    defaultItem: {
      titleLine1: "ACEPTAMOS TODAS LAS",
      titleLine2: "BILLETERAS DIGITALES",
    },
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
      name: "title",
      label: "Título Completo (Alternativo)",
      type: "string",
    },
    {
      name: "methods",
      label: "Métodos de Pago",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || "Método de Pago" }),
      },
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "string",
        },
        {
          name: "image",
          label: "Logo / Imagen",
          type: "image",
        },
        {
          name: "description",
          label: "Descripción",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
};

export function PaymentMethodsBlock(props: PageBlocksPaymentMethods) {
  const {
    titleLine1 = "ACEPTAMOS TODAS LAS",
    titleLine2 = "BILLETERAS DIGITALES",
    methods = [],
  } = props;

  return (
    <Section
      id={PreciosSections.METODOS_DE_PAGO}
      className="my-20 flex flex-col gap-16"
    >
      <TwoLineTitle line1={titleLine1} line2={titleLine2} />

      {methods && methods.length > 0 && (
        <div
          data-tina-field={tinaField(props, "methods")}
          className="mb-18 grid w-full max-w-4xl items-center justify-center gap-30 md:grid-cols-3"
        >
          {methods.map((method, idx) => {
            if (!method?.image) return null;
            return (
              <div
                key={method.name || idx}
                className="relative transition-transform hover:scale-105"
              >
                <Image
                  src={method.image}
                  alt={method.name || ""}
                  width={256}
                  height={256}
                  className="absolute top-0 left-0 -z-10 aspect-square w-full justify-self-center rounded-lg object-contain blur-lg"
                />
                <Image
                  src={method.image}
                  alt={method.name || ""}
                  width={256}
                  height={256}
                  className="z-20 aspect-square w-full justify-self-center rounded-lg object-contain"
                />
              </div>
            );
          })}
        </div>
      )}

      <MetodosDePagoClient />
    </Section>
  );
}
