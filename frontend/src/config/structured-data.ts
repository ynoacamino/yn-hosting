type JsonLdThing = Record<string, unknown>;

export const organizationSchema: JsonLdThing = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EnderHost",
  url: "https://enderhost.net.pe",
  logo: "/uploads/logo-emblema.png",
  description:
    "Hosting de Minecraft en Perú con soporte técnico 24/7, baja latencia y planes accesibles.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
};

export const websiteSchema: JsonLdThing = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EnderHost",
  url: "https://enderhost.net.pe",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://enderhost.net.pe/preguntas?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

interface ProductItem {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  block?: string | null;
}

export function generateProductsSchema(
  plans?: (ProductItem | null | undefined)[] | null,
): JsonLdThing[] {
  return (plans || [])
    .filter((plan): plan is ProductItem => Boolean(plan?.name))
    .map((plan) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: `Plan ${plan.name} - Hosting Minecraft`,
      description:
        plan.description?.replace(/<[^>]*>/g, "") ||
        `Plan ${plan.name} de hosting de Minecraft con alta disponibilidad.`,
      image: plan.block || "/uploads/block-iron.webp",
      brand: {
        "@type": "Brand",
        name: "EnderHost",
      },
      offers: {
        "@type": "Offer",
        url: "https://enderhost.net.pe/precios",
        priceCurrency: "PEN",
        price: `${plan.price || 0}`,
        priceValidUntil: "2026-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
    }));
}

export const productsSchema: JsonLdThing[] = generateProductsSchema([
  {
    name: "Roca",
    price: 28,
    description: "4GB RAM, jugadores ilimitados.",
    block: "/uploads/block-cobblestone.png",
  },
  {
    name: "Carbón",
    price: 37,
    description: "6GB RAM, backups automáticos.",
    block: "/uploads/block-coal.png",
  },
  {
    name: "Hierro",
    price: 45,
    description: "8GB RAM, soporte personalizado.",
    block: "/uploads/block-iron.webp",
  },
  {
    name: "Oro",
    price: 56,
    description: "10GB RAM, alta potencia.",
    block: "/uploads/block-gold.png",
  },
  {
    name: "Diamante",
    price: 68,
    description: "12GB RAM, alto rendimiento.",
    block: "/uploads/block-diamond.webp",
  },
  {
    name: "Netherita",
    price: 78,
    description: "14GB RAM, máxima capacidad.",
    block: "/uploads/block-netherite.png",
  },
]);

interface Pregunta {
  question?: string | null;
  answer?: string | null;
}

export function generateFAQSchema(
  preguntas?: (Pregunta | null | undefined)[] | null,
): JsonLdThing {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (preguntas || [])
      .filter((p): p is Pregunta => Boolean(p?.question && p?.answer))
      .map((p) => ({
        "@type": "Question",
        name: p.question || "",
        acceptedAnswer: {
          "@type": "Answer",
          text: (p.answer || "").replace(/<[^>]*>/g, ""),
        },
      })),
  };
}
