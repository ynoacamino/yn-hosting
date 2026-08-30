import type { Metadata } from "next";
import { generateProductsSchema } from "@/config/structured-data";
import client from "../../../tina/__generated__/client";
import ClientPage from "../[...urlSegments]/client-page";

export const metadata: Metadata = {
  title: "Precios | EnderHost",
  description:
    "Descubre nuestros planes de hosting y elige el que mejor se adapte a tus necesidades. Ofrecemos opciones para todos los presupuestos y requisitos.",
};

export const revalidate = 60;

export default async function PrecioPage() {
  const data = await client.queries.page({
    relativePath: "precios.mdx",
  });

  const pricingBlocks =
    data.data.page.blocks?.filter(
      (b) => b?.__typename === "PageBlocksPricing",
    ) || [];

  const plans = pricingBlocks.flatMap((b) =>
    b && "plans" in b && b.plans ? b.plans : [],
  );

  const schemas = generateProductsSchema(plans);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={`product-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c"),
          }}
        />
      ))}
      <ClientPage {...data} />
    </>
  );
}
