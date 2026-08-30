import type { Collection } from "tinacms";
import { iconSchema } from "../fields/icon";

const Global: Collection = {
  label: "Configuración Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "string",
      label: "Título del Sitio",
      name: "title",
    },
    {
      type: "string",
      label: "Título Corto",
      name: "short_title",
    },
    {
      type: "string",
      label: "Descripción",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      label: "Logo",
      name: "logo",
    },
    {
      type: "object",
      label: "Enlaces de Navegación",
      name: "nav",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.label || "Enlace" }),
        defaultItem: {
          href: "/",
          label: "Inicio",
        },
      },
      fields: [
        {
          type: "string",
          label: "Texto",
          name: "label",
        },
        {
          type: "string",
          label: "Enlace (href)",
          name: "href",
        },
      ],
    },
    {
      type: "object",
      label: "Redes Sociales",
      name: "social",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || "Red Social" }),
      },
      fields: [
        {
          type: "string",
          label: "Nombre",
          name: "name",
        },
        {
          type: "string",
          label: "URL",
          name: "url",
        },
        iconSchema,
      ],
    },
  ],
};

export default Global;
