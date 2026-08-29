"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ChatBubble from "@/components/ui/chat-bubble";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";

const messagesBoubleUser = [
  "Me gustaria hacer la prueba gratuita 😁😁",
  "- En la version 1.20.1",
  "- Y usando forge para mods",
  "Mi correo para la creacion de la cuenta de prueba es: tu_correo@example.com",
];

const messagesBoubleUserLength = messagesBoubleUser.reduce(
  (acc, curr) => acc + curr.length,
  0,
);

const messagesBoubleSupport = [
  "POR SUPUESTO 🥳🥳",
  "Revisa tu correo en unos minutos para la confirmacion y los datos de tu cuenta de prueba.",
  "Disfruta la prueba 🙌🙌",
];

export function Step({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-start gap-6 text-lg md:text-2xl">
        <div className="flex size-10 min-w-10 items-center justify-center rounded-full border-2 border-foreground">
          {index}
        </div>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

export default function Prueba() {
  return (
    <Section className="my-20 flex flex-col gap-16">
      <Title>
        <span>Haz una prueba gratis</span>
        <span>de 24 horas</span>
      </Title>
      <div className="flex flex-col gap-24 md:gap-28">
        <Step
          index={1}
          title='Escribenos diciendo: "Me gustaria hacer la prueba gratuita"'
        >
          <div className="flex min-h-52 items-start justify-end md:min-h-46">
            <ChatBubble
              messages={messagesBoubleUser}
              timestamp="1:49"
              type="user"
            />
          </div>
        </Step>
        <Step
          index={2}
          title="Espera a que te enviemos un mensaje de confirmacion junto con tu usuario de prueba."
        >
          <div className="flex min-h-58 items-start justify-start">
            <ChatBubble
              messages={messagesBoubleSupport}
              timestamp="1:52"
              type="support"
              delay={0.5 + (messagesBoubleUserLength * 50) / 1000 + 0.2}
              messagesDelay={800 + messagesBoubleUserLength * 50 + 800}
            />
          </div>
        </Step>
        <Step
          index={3}
          title="Listo! Disfruta de tu prueba y comprueba la calidad de nuestros servidores!"
        >
          <div className="flex w-full items-center justify-center">
            <Image
              src="https://ynoa-uploader.ynoacamino.tech/uploads/1760821898_image%20%283%29.webp"
              alt="prueba"
              width={512}
              height={320}
              className="w-full max-w-lg rounded-xl"
            />
          </div>
        </Step>
        <Step
          index={4}
          title="Solicita ya! con el botón de abajo o escribenos por WhatsApp."
        >
          <div className="flex w-full items-center justify-center">
            <Button asChild size="lg">
              <Link target="_blank" href="/solicitar-prueba-gratuita">
                Solicitar tu prueba gratuita
              </Link>
            </Button>
          </div>
        </Step>
      </div>
    </Section>
  );
}
