import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { SITE_NAME } from "@/config/variables";

export const metadata: Metadata = {
  title: `Política de Privacidad | ${SITE_NAME}`,
  description:
    "Conoce nuestra política de privacidad y cómo protegemos tus datos personales. En EnderHost, tu privacidad es nuestra prioridad.",
};

export default function PrivacyPolicy() {
  return <LegalPage slug="politica-de-privacidad" metadata={{}} />;
}
