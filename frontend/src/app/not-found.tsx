import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";

export default function NotFound() {
  return (
    <Section className="my-32 flex flex-col items-center justify-center gap-8 text-center">
      <Title>
        <span>404 - Página no</span>
        <span>encontrada</span>
      </Title>
      <p className="max-w-md text-foreground/80 text-lg">
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Button size="lg" asChild>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </Section>
  );
}
