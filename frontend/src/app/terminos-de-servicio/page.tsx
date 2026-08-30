import type { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../tina/__generated__/client";

export const metadata: Metadata = {
  title: "Términos de servicio | EnderHost",
  description:
    "Lee nuestros términos de servicio para entender las condiciones y políticas que rigen el uso de nuestros servicios de hosting. En EnderHost, nos comprometemos a ofrecer transparencia y seguridad a nuestros usuarios.",
};

export const revalidate = 60;

export default async function TermsOfService() {
  const result = await client.queries.legal({
    relativePath: "terminos-de-servicio.mdx",
  });

  return (
    <div className="prose md:prose-lg my-20 w-full max-w-6xl px-6 prose-a:text-foreground prose-headings:text-foreground prose-strong:text-foreground text-foreground">
      <TinaMarkdown content={result.data.legal.body} />
    </div>
  );
}
