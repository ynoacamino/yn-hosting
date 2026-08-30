import type { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../tina/__generated__/client";

export const metadata: Metadata = {
  title: "Política de Privacidad | EnderHost",
  description:
    "Conoce nuestra política de privacidad y cómo protegemos tus datos personales. En EnderHost, tu privacidad es nuestra prioridad.",
};

export const revalidate = 60;

export default async function PrivacyPolicy() {
  const result = await client.queries.legal({
    relativePath: "politica-de-privacidad.mdx",
  });

  return (
    <div className="prose md:prose-lg my-20 w-full max-w-6xl px-6 prose-a:text-foreground prose-headings:text-foreground prose-strong:text-foreground text-foreground">
      <TinaMarkdown content={result.data.legal.body} />
    </div>
  );
}
