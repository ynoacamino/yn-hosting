import client from "@tina/__generated__/client";
import type { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { DEFAULT_REVALIDATE } from "@/config/variables";


interface LegalPageProps {
  slug: string;
  metadata: Metadata;
}

export function generateLegalMetadata(slug: string): Metadata {
  const titles: Record<string, string> = {
    "terminos-de-servicio": "Términos de servicio",
    "politica-de-privacidad": "Política de Privacidad",
  };

  return {
    title: `${titles[slug] || slug} | EnderHost`,
    description: "",
  };
}

export async function LegalPage({ slug }: LegalPageProps) {
  const result = await client.queries.legal(
    { relativePath: `${slug}.mdx` },
    { fetchOptions: { next: { revalidate: DEFAULT_REVALIDATE } } },
  );

  return (
    <div className="prose md:prose-lg my-20 w-full max-w-6xl px-6 prose-a:text-foreground prose-headings:text-foreground prose-strong:text-foreground text-foreground">
      <TinaMarkdown content={result.data.legal.body} />
    </div>
  );
}
