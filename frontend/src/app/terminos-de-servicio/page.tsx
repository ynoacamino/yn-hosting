import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { SITE_NAME } from "@/config/variables";

export const metadata: Metadata = {
  title: `Términos de servicio | ${SITE_NAME}`,
  description:
    "Lee nuestros términos de servicio para entender las condiciones y políticas que rigen el uso de nuestros servicios de hosting. En EnderHost, nos comprometemos a ofrecer transparencia y seguridad a nuestros usuarios.",
};

export default function TermsOfService() {
  return <LegalPage slug="terminos-de-servicio" metadata={{}} />;
}
