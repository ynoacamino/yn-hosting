"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Glass } from "@/components/ui/glass";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { WHATSAPP_REDIRECT_SECONDS, WHATSAPP_URL } from "@/config/variables";

export default function SolicitarPruebaPage() {
  const [countdown, setCountdown] = useState(WHATSAPP_REDIRECT_SECONDS);
  const [hasRedirected, setHasRedirected] = useState(false);

  const openWhatsApp = useCallback(() => {
    if (hasRedirected) return;
    setHasRedirected(true);
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }, [hasRedirected]);

  useEffect(() => {
    if (countdown <= 0) {
      openWhatsApp();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, openWhatsApp]);

  return (
    <Section className="my-20 flex flex-col items-center gap-10">
      <Title>
        <span>Solicitá tu prueba</span>
        <span>gratuita</span>
      </Title>

      <Glass className="flex w-full max-w-md flex-col items-center gap-8 p-8 text-center">
        <IconBrandWhatsapp className="size-16 text-green-500" />

        <div className="flex flex-col gap-2">
          <p className="text-lg">
            Serás redirigido a nuestro chat de WhatsApp en{" "}
            <span className="font-bold text-primary">{countdown}</span> segundo
            {countdown === 1 ? "" : "s"}...
          </p>
          <p className="text-muted-foreground text-sm">
            Preparamos todo para que puedas probar tu servidor de Minecraft sin
            compromiso.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <Button asChild size="lg" className="w-full">
            <button type="button" onClick={openWhatsApp}>
              <IconBrandWhatsapp className="size-5" />
              Abrir WhatsApp ahora
            </button>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/precios">Ver planes</Link>
          </Button>
        </div>
      </Glass>
    </Section>
  );
}
