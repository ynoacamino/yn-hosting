import type { Collection } from "tinacms";
import { extendDescriptionBlockSchema } from "@/components/blocks/extend-description";
import { faqBlockSchema } from "@/components/blocks/faq";
import { heroBlockSchema } from "@/components/blocks/hero";
import { hostingFeaturesBlockSchema } from "@/components/blocks/hosting-features";
import { locationsBlockSchema } from "@/components/blocks/locations";
import { paymentMethodsBlockSchema } from "@/components/blocks/payment-methods";
import { pricingBlockSchema } from "@/components/blocks/pricing";
import { versionsBlockSchema } from "@/components/blocks/versions";

const Page: Collection = {
  label: "Páginas",
  name: "page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join("/");
      if (filepath === "home") {
        return "/";
      }
      return `/${filepath}`;
    },
  },
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Secciones / Bloques de la Página",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        hostingFeaturesBlockSchema,
        versionsBlockSchema,
        extendDescriptionBlockSchema,
        locationsBlockSchema,
        pricingBlockSchema,
        paymentMethodsBlockSchema,
        faqBlockSchema,
      ],
    },
  ],
};

export default Page;
