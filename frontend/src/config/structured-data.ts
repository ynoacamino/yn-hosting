type JsonLdThing = Record<string, unknown>;

export const organizationSchema: JsonLdThing = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EnderHost",
  url: "https://enderhost.net.pe",
  logo: "https://ynoa-uploader.ynoacamino.tech/uploads/1760851208_logo-emblema.png",
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

export const productsSchema: JsonLdThing[] = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Plan Hierro - Hosting Minecraft",
    description:
      "Ideal para comenzar en Minecraft con buen rendimiento y a bajo costo. 4GB de RAM, almacenamiento ilimitado.",
    image:
      "https://ynoa-uploader.ynoacamino.tech/uploads/1745094817_Block_of_Iron_%28texture%29_JE3_BE3.webp",
    brand: {
      "@type": "Brand",
      name: "EnderHost",
    },
    offers: {
      "@type": "Offer",
      url: "https://enderhost.net.pe/precios",
      priceCurrency: "PEN",
      price: "30",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Plan Diamante - Hosting Minecraft",
    description:
      "Un plan equilibrado para jugadores frecuentes y servidores personalizados. 6GB de RAM, backups semanales.",
    image:
      "https://ynoa-uploader.ynoacamino.tech/uploads/1745095652_BlockSprite_block-of-diamond%20%281%29.webp",
    brand: {
      "@type": "Brand",
      name: "EnderHost",
    },
    offers: {
      "@type": "Offer",
      url: "https://enderhost.net.pe/precios",
      priceCurrency: "PEN",
      price: "40",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Plan Netherita - Hosting Minecraft",
    description:
      "Para comunidades exigentes y servidores con múltiples jugadores y mods. 8GB de RAM, backups diarios.",
    image:
      "https://ynoa-uploader.ynoacamino.tech/uploads/1745092849_b41b023af7bebaa4ce3a836bae51ab0642cd1d3076ee5d360bf77dcbb1e498e5.png",
    brand: {
      "@type": "Brand",
      name: "EnderHost",
    },
    offers: {
      "@type": "Offer",
      url: "https://enderhost.net.pe/precios",
      priceCurrency: "PEN",
      price: "50",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  },
];

interface Pregunta {
  question: string;
  answer: string;
}

export function generateFAQSchema(preguntas: Pregunta[]): JsonLdThing {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((p) => ({
      "@type": "Question",
      name: p.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: p.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };
}
