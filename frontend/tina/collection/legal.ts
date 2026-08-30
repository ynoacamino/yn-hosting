import type { Collection } from "tinacms";

const Legal: Collection = {
  label: "Páginas Legales",
  name: "legal",
  path: "content/legal",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join("/");
      return `/${filepath}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Título de la Página",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Descripción SEO",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "datetime",
      label: "Fecha de Actualización",
      name: "date_updated",
    },
    {
      type: "rich-text",
      label: "Contenido",
      name: "body",
      isBody: true,
    },
  ],
};

export default Legal;
