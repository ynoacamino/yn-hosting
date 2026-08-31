// tina/config.tsx
import { defineConfig } from "tinacms";

// tina/fields/icon.tsx
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition
} from "@headlessui/react";
import React2 from "react";
import { BiChevronRight } from "react-icons/bi";
import { GoCircleSlash } from "react-icons/go";
import { Button } from "tinacms";

// src/lib/icons.tsx
import {
  IconAutomation,
  IconBoltFilled,
  IconBulb,
  IconMap,
  IconShield,
  IconTable,
  IconTableFilled,
  IconUserCog,
  IconUsers,
  IconWorld
} from "@tabler/icons-react";
import {
  AppWindow as IconAppWindow,
  HardDrive as IconHardDrive,
  HardDriveDownload as IconHardDriveDownload,
  History as IconHistory,
  MemoryStick as IconMemoryStick,
  MonitorCheck as IconMonitorCheck,
  PackageCheck as IconPackageCheck,
  Signal as IconSignal,
  Smartphone as IconSmartphone,
  UsersRound as IconUsersRound
} from "lucide-react";

// src/components/icons/forge.tsx
function IconForge({ className }) {
  return React.createElement(
    "svg",
    {
      role: "img",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      id: "Curseforge--Streamline-Simple-Icons",
      height: 24,
      width: 24,
      className
    },
    React.createElement("desc", null, "Curseforge Streamline Icon: https://streamlinehq.com"),
    React.createElement("title", null, "CurseForge"),
    React.createElement(
      "path",
      {
        d: "M18.326 9.2145S23.2261 8.4418 24 6.1882h-7.5066V4.4H0l2.0318 2.3576V9.173s5.1267 -0.2665 7.1098 1.2372c2.7146 2.516 -3.053 5.917 -3.053 5.917L5.0995 19.6c1.5465 -1.4726 4.494 -3.3775 9.8983 -3.2857 -2.0565 0.65 -4.1245 1.6651 -5.7344 3.2857h10.9248l-1.0288 -3.2726s-7.918 -4.6688 -0.8336 -7.1127z",
        fill: "currentColor",
        strokeWidth: 1
      }
    )
  );
}

// src/components/icons/spigot.tsx
function SpigotIcon({ className }) {
  return React.createElement(
    "svg",
    {
      role: "img",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      id: "Spigotmc--Streamline-Simple-Icons",
      height: 24,
      width: 24,
      className
    },
    React.createElement("desc", null, "Spigotmc Streamline Icon: https://streamlinehq.com"),
    React.createElement("title", null, "SpigotMC"),
    React.createElement(
      "path",
      {
        d: "M12.644 2.44c-0.179 0.033 -0.456 0.182 -0.603 0.331 -0.245 0.2 -0.588 0.232 -2.023 0.133l-1.713 -0.116 0.049 0.713 0.049 0.713h0.652c0.36 -0.016 1.207 -0.05 1.876 -0.083l1.224 -0.083v3.317l-0.44 0.05c-0.425 0.05 -0.457 0.1 -0.457 0.862 0 0.713 -0.05 0.813 -0.36 0.863 -0.26 0.033 -0.39 0.182 -0.44 0.464 -0.016 0.232 -0.114 0.448 -0.18 0.497 -0.08 0.05 -0.228 0.597 -0.326 1.211 -0.228 1.526 -0.375 1.708 -1.37 1.84 -1.436 0.167 -2.056 0.134 -2.056 -0.148 0 -0.2 -0.244 -0.25 -1.158 -0.25 -1.012 0 -1.158 -0.032 -1.24 -0.33 -0.065 -0.25 -0.228 -0.333 -0.62 -0.333s-0.555 0.083 -0.62 0.332c-0.082 0.299 -0.228 0.332 -1.224 0.332 -1.011 0 -1.158 0.033 -1.256 0.332 -0.049 0.182 -0.18 0.331 -0.26 0.331 -0.082 0 -0.148 0.863 -0.148 1.99 0 1.609 0.05 1.99 0.229 1.99 0.13 0 0.293 0.15 0.342 0.332 0.082 0.282 0.245 0.332 1.175 0.332 0.914 0 1.077 0.05 1.142 0.331 0.13 0.465 1.11 0.465 1.24 0 0.065 -0.282 0.228 -0.331 1.158 -0.331 0.849 0 1.077 -0.05 1.077 -0.25 0 -0.397 2.121 -0.33 3.426 0.117 1.583 0.53 5.14 0.53 6.82 0 0.653 -0.199 1.256 -0.332 1.338 -0.282 0.359 0.232 0.163 0.896 -0.343 1.178 -0.587 0.298 -0.587 0.563 0 1.956l0.343 0.797 1.599 -0.067c1.73 -0.083 2.822 -0.48 3.915 -1.41l0.539 -0.464 -0.31 -0.912c-0.327 -0.962 -0.734 -1.327 -1.518 -1.327 -0.342 0 -0.473 -0.149 -0.766 -0.796 -0.506 -1.144 -1.224 -1.758 -2.758 -2.355 -0.799 -0.315 -1.582 -0.746 -1.99 -1.127 -0.604 -0.548 -0.685 -0.73 -0.832 -1.775 -0.098 -0.63 -0.245 -1.194 -0.326 -1.244 -0.066 -0.05 -0.164 -0.265 -0.18 -0.497 -0.049 -0.282 -0.18 -0.431 -0.424 -0.464 -0.326 -0.05 -0.375 -0.15 -0.375 -0.863 0 -0.763 -0.033 -0.812 -0.44 -0.862 -0.458 -0.05 -0.458 -0.05 -0.507 -1.526 -0.032 -0.929 0.017 -1.542 0.13 -1.658 0.115 -0.116 0.93 -0.183 2.09 -0.183h1.908l0.05 -0.564c0.032 -0.298 -0.017 -0.63 -0.099 -0.713 -0.098 -0.1 -0.816 -0.083 -1.909 0.05 -1.256 0.15 -1.778 0.15 -1.86 0.017 -0.146 -0.25 -0.848 -0.481 -1.24 -0.398z",
        fill: "currentColor",
        strokeWidth: 1
      }
    )
  );
}

// src/lib/icons.tsx
var iconMapper = {
  Spigot: SpigotIcon,
  Forge: IconForge,
  Automation: IconAutomation,
  BoltFilled: IconBoltFilled,
  Bulb: IconBulb,
  Map: IconMap,
  Shield: IconShield,
  Table: IconTable,
  TableFilled: IconTableFilled,
  UserCog: IconUserCog,
  Users: IconUsers,
  World: IconWorld,
  HardDrive: IconHardDrive,
  HardDriveDownload: IconHardDriveDownload,
  MemoryStick: IconMemoryStick,
  Smartphone: IconSmartphone,
  UsersRound: IconUsersRound,
  AppWindow: IconAppWindow,
  Signal: IconSignal,
  PackageCheck: IconPackageCheck,
  MonitorCheck: IconMonitorCheck,
  History: IconHistory
};
function IconMapper({
  name,
  className
}) {
  if (!name) return null;
  const IconComponent = iconMapper[name];
  if (!IconComponent) return null;
  return React.createElement(IconComponent, { className });
}

// tina/fields/icon.tsx
var parseIconName = (name) => {
  const splitName = name.split(/(?=[A-Z])/);
  if (splitName.length > 1) {
    return splitName.join(" ");
  }
  return name;
};
var IconPickerInput = ({ input }) => {
  const [filter, setFilter] = React2.useState("");
  const availableIconNames = React2.useMemo(() => Object.keys(iconMapper), []);
  const filteredIcons = React2.useMemo(() => {
    return availableIconNames.filter(
      (name) => name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [availableIconNames, filter]);
  const inputValue = typeof input.value === "string" ? input.value : "";
  const inputLabel = inputValue ? parseIconName(inputValue) : "Seleccionar Icono";
  const handleSelectIcon = (iconName) => {
    const syntheticEvent = {
      target: {
        name: input.name,
        value: iconName
      }
    };
    input.onChange(syntheticEvent);
  };
  return React2.createElement("div", { className: "relative z-[1000]" }, React2.createElement(
    "input",
    {
      type: "text",
      id: input.name,
      className: "hidden",
      value: inputValue,
      onChange: input.onChange
    }
  ), React2.createElement(Popover, null, ({ open }) => React2.createElement(React2.Fragment, null, React2.createElement(PopoverButton, { as: "div" }, React2.createElement(
    Button,
    {
      className: `flex h-11 items-center gap-2 px-4 text-sm ${inputValue ? "h-11" : "h-10"}`,
      size: "custom",
      rounded: "full",
      variant: open ? "secondary" : "white"
    },
    inputValue && React2.createElement(
      IconMapper,
      {
        name: inputValue,
        className: "h-6 w-6 fill-current text-emerald-400"
      }
    ),
    React2.createElement("span", null, inputLabel),
    !inputValue && React2.createElement(BiChevronRight, { className: "ml-1 h-5 w-5 opacity-70" })
  )), React2.createElement(
    "div",
    {
      className: "absolute -bottom-2 left-0 w-full min-w-[280px] max-w-md translate-y-full",
      style: { zIndex: 1e3 }
    },
    React2.createElement(
      Transition,
      {
        enter: "transition duration-150 ease-out",
        enterFrom: "transform opacity-0 -translate-y-2",
        enterTo: "transform opacity-100 translate-y-0",
        leave: "transition duration-75 ease-in",
        leaveFrom: "transform opacity-100 translate-y-0",
        leaveTo: "transform opacity-0 -translate-y-2"
      },
      React2.createElement(PopoverPanel, { className: "relative z-50 overflow-hidden rounded-lg border border-gray-700 bg-gray-900 text-white shadow-xl" }, ({ close }) => React2.createElement("div", { className: "flex h-full max-h-[22rem] w-full flex-col" }, React2.createElement("div", { className: "z-10 border-gray-700 border-b bg-gray-800 p-2.5" }, React2.createElement(
        "input",
        {
          type: "text",
          className: "block w-full rounded border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none",
          onClick: (e) => {
            e.stopPropagation();
          },
          value: filter,
          onChange: (e) => setFilter(e.target.value),
          placeholder: "Buscar icono..."
        }
      )), filteredIcons.length === 0 && React2.createElement("div", { className: "py-4 text-center text-gray-400 text-xs" }, "No se encontraron iconos"), filteredIcons.length > 0 && React2.createElement("div", { className: "grid max-h-60 w-full grid-cols-4 gap-2 overflow-y-auto p-3" }, React2.createElement(
        "button",
        {
          type: "button",
          className: "flex flex-col items-center justify-center rounded p-2 text-gray-400 transition hover:bg-gray-800 hover:text-red-400",
          onClick: () => {
            handleSelectIcon("");
            setFilter("");
            close();
          },
          title: "Quitar icono"
        },
        React2.createElement(GoCircleSlash, { className: "h-6 w-6" }),
        React2.createElement("span", { className: "mt-1 text-[10px]" }, "Ninguno")
      ), filteredIcons.map((name) => React2.createElement(
        "button",
        {
          key: name,
          type: "button",
          className: `flex flex-col items-center justify-center rounded p-2 transition hover:bg-gray-800 ${inputValue === name ? "border border-emerald-500 bg-emerald-950/60 text-emerald-400" : "text-gray-200"}`,
          onClick: () => {
            handleSelectIcon(name);
            setFilter("");
            close();
          },
          title: name
        },
        React2.createElement(IconMapper, { name, className: "h-6 w-6" }),
        React2.createElement("span", { className: "mt-1 max-w-full truncate text-[10px]" }, name)
      )))))
    )
  ))));
};
var iconSchema = {
  type: "string",
  label: "Icono",
  name: "icon",
  ui: {
    component: IconPickerInput
  }
};

// tina/collection/global.ts
var Global = {
  label: "Configuraci\xF3n Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true
  },
  fields: [
    {
      type: "string",
      label: "T\xEDtulo del Sitio",
      name: "title"
    },
    {
      type: "string",
      label: "T\xEDtulo Corto",
      name: "short_title"
    },
    {
      type: "string",
      label: "Descripci\xF3n",
      name: "description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      label: "Logo",
      name: "logo"
    },
    {
      type: "object",
      label: "Enlaces de Navegaci\xF3n",
      name: "nav",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.label || "Enlace" }),
        defaultItem: {
          href: "/",
          label: "Inicio"
        }
      },
      fields: [
        {
          type: "string",
          label: "Texto",
          name: "label"
        },
        {
          type: "string",
          label: "Enlace (href)",
          name: "href"
        }
      ]
    },
    {
      type: "object",
      label: "Redes Sociales",
      name: "social",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || "Red Social" })
      },
      fields: [
        {
          type: "string",
          label: "Nombre",
          name: "name"
        },
        {
          type: "string",
          label: "URL",
          name: "url"
        },
        iconSchema
      ]
    }
  ]
};
var global_default = Global;

// tina/collection/legal.ts
var Legal = {
  label: "P\xE1ginas Legales",
  name: "legal",
  path: "content/legal",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join("/");
      return `/${filepath}`;
    }
  },
  fields: [
    {
      type: "string",
      label: "T\xEDtulo de la P\xE1gina",
      name: "title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      label: "Descripci\xF3n SEO",
      name: "description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "datetime",
      label: "Fecha de Actualizaci\xF3n",
      name: "date_updated"
    },
    {
      type: "rich-text",
      label: "Contenido",
      name: "body",
      isBody: true
    }
  ]
};
var legal_default = Legal;

// src/components/blocks/extend-description.tsx
import { motion } from "motion/react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

// src/components/providers/DeviceProvider.tsx
import { createContext, useContext, useMemo } from "react";
var DeviceContext = createContext(null);

// src/lib/utils.ts
import { clsx } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/blocks/extend-description.tsx
var extendDescriptionBlockSchema = {
  name: "extendDescription",
  label: "Descripci\xF3n Extendida / Caracter\xEDsticas",
  ui: {
    previewSrc: "/blocks/content.png"
  },
  fields: [
    {
      name: "titleLine1",
      label: "T\xEDtulo L\xEDnea 1",
      type: "string"
    },
    {
      name: "titleLine2",
      label: "T\xEDtulo L\xEDnea 2",
      type: "string"
    },
    {
      name: "items",
      label: "Secciones Explicativas",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Caracter\xEDstica" })
      },
      fields: [
        {
          name: "title",
          label: "T\xEDtulo",
          type: "string"
        },
        {
          name: "content",
          label: "Contenido",
          type: "string",
          ui: {
            component: "textarea"
          }
        },
        {
          name: "image",
          label: "Imagen",
          type: "image"
        }
      ]
    }
  ]
};

// src/components/blocks/faq.tsx
import { IconArrowRight } from "@tabler/icons-react";
import { motion as motion2 } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Masonry from "react-smart-masonry";
import { tinaField as tinaField2 } from "tinacms/dist/react";
var faqBlockSchema = {
  name: "faq",
  label: "Preguntas Frecuentes",
  ui: {
    previewSrc: "/blocks/callout.png"
  },
  fields: [
    {
      name: "titleLine1",
      label: "T\xEDtulo L\xEDnea 1",
      type: "string"
    },
    {
      name: "titleLine2",
      label: "T\xEDtulo L\xEDnea 2",
      type: "string"
    },
    {
      name: "variant",
      label: "Modo de Visualizaci\xF3n",
      type: "string",
      options: [
        { label: "Autom\xE1tico (seg\xFAn p\xE1gina)", value: "auto" },
        { label: "Resumen (Tarjetas enlace para Inicio)", value: "preview" },
        {
          label: "Completo (Masonry por Categor\xEDas para /preguntas)",
          value: "full"
        }
      ]
    },
    {
      name: "sections",
      label: "Categor\xEDas de Preguntas",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Categor\xEDa" })
      },
      fields: [
        {
          name: "title",
          label: "Nombre Categor\xEDa",
          type: "string"
        },
        {
          name: "questions",
          label: "Preguntas",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => ({ label: item?.question || "Pregunta" })
          },
          fields: [
            {
              name: "question",
              label: "Pregunta",
              type: "string"
            },
            {
              name: "answer",
              label: "Respuesta",
              type: "string",
              ui: {
                component: "textarea"
              }
            },
            {
              name: "video",
              label: "Video (URL opcional)",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
};

// src/components/blocks/hero.tsx
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion as motion3 } from "motion/react";
import Link2 from "next/link";
import { tinaField as tinaField3 } from "tinacms/dist/react";

// src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
var buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium font-medium outline-none transition-all hover:cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// src/components/blocks/hero.tsx
var heroBlockSchema = {
  name: "hero",
  label: "Hero Section",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      title: "Hosting de servidores de Minecraft",
      heroFeatures: [
        "Servidores 24/7",
        "Baja latencia",
        "Soporte dedicado",
        "Sin lag"
      ],
      primaryButtonText: "Ver planes",
      primaryButtonLink: "/precios",
      secondaryButtonText: "\xA1Pru\xE9balo gratis!",
      secondaryButtonLink: "/prueba-gratuita"
    }
  },
  fields: [
    {
      name: "title",
      label: "T\xEDtulo Principal",
      type: "string"
    },
    {
      name: "heroFeatures",
      label: "Etiquetas / Features",
      type: "string",
      list: true
    },
    {
      name: "primaryButtonText",
      label: "Texto Bot\xF3n Principal",
      type: "string"
    },
    {
      name: "primaryButtonLink",
      label: "Enlace Bot\xF3n Principal",
      type: "string"
    },
    {
      name: "secondaryButtonText",
      label: "Texto Bot\xF3n Secundario",
      type: "string"
    },
    {
      name: "secondaryButtonLink",
      label: "Enlace Bot\xF3n Secundario",
      type: "string"
    }
  ]
};

// src/components/blocks/hosting-features.tsx
import { motion as motion4 } from "motion/react";
import { tinaField as tinaField4 } from "tinacms/dist/react";

// src/components/ui/glass.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import * as React3 from "react";
var glassVariants = cva2("rounded-lg backdrop-blur-lg", {
  variants: {
    variant: {
      default: "bg-[#111928]/75",
      light: "bg-white/10",
      dark: "bg-black/50",
      custom: ""
    },
    padding: {
      none: "",
      sm: "p-4",
      default: "p-6",
      lg: "p-8"
    },
    paddingBottom: {
      none: "",
      sm: "pb-4",
      default: "pb-6",
      lg: "pb-8",
      xl: "pb-10"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
    paddingBottom: "none"
  }
});
var Glass = React3.forwardRef(
  ({ className, variant, padding, paddingBottom, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot2 : "div";
    return React3.createElement(
      Comp,
      {
        ref,
        className: cn(
          glassVariants({ variant, padding, paddingBottom, className })
        ),
        ...props
      }
    );
  }
);
Glass.displayName = "Glass";

// src/components/blocks/hosting-features.tsx
var hostingFeaturesBlockSchema = {
  name: "hostingFeatures",
  label: "Hosting Features",
  ui: {
    previewSrc: "/blocks/features.png"
  },
  fields: [
    {
      name: "titleLine1",
      label: "T\xEDtulo L\xEDnea 1",
      type: "string"
    },
    {
      name: "titleLine2",
      label: "T\xEDtulo L\xEDnea 2",
      type: "string"
    },
    {
      name: "features",
      label: "Lista de Caracter\xEDsticas",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Caracter\xEDstica" })
      },
      fields: [
        {
          name: "title",
          label: "T\xEDtulo",
          type: "string"
        },
        {
          name: "content",
          label: "Descripci\xF3n",
          type: "string",
          ui: {
            component: "textarea"
          }
        },
        iconSchema
      ]
    }
  ]
};

// src/components/blocks/locations.tsx
import Image3 from "next/image";
import { tinaField as tinaField5 } from "tinacms/dist/react";

// src/components/ui/buy-button.tsx
import Link3 from "next/link";

// src/config/variables.ts
var GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// src/components/ui/cube3d.tsx
import Image2 from "next/image";

// src/components/blocks/locations.tsx
var locationsBlockSchema = {
  name: "locations",
  label: "Ubicaciones de Servidores",
  ui: {
    previewSrc: "/blocks/stats.png"
  },
  fields: [
    {
      name: "titleLine1",
      label: "T\xEDtulo L\xEDnea 1",
      type: "string"
    },
    {
      name: "titleLine2",
      label: "T\xEDtulo L\xEDnea 2",
      type: "string"
    },
    {
      name: "locations",
      label: "Lista de Ubicaciones",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || "Ubicaci\xF3n" })
      },
      fields: [
        {
          name: "name",
          label: "Nombre Ubicaci\xF3n",
          type: "string"
        },
        {
          name: "description",
          label: "Descripci\xF3n",
          type: "string",
          ui: {
            component: "textarea"
          }
        },
        {
          name: "latency",
          label: "Latencia (ms)",
          type: "number"
        },
        {
          name: "qualification",
          label: "Calificaci\xF3n (1-5 estrellas)",
          type: "number"
        },
        {
          name: "mc_icon",
          label: "Icono de Minecraft",
          type: "image"
        },
        {
          name: "block",
          label: "Textura Cubo 3D",
          type: "image"
        },
        {
          name: "isExternal",
          label: "\xBFEs proveedor externo?",
          type: "boolean"
        }
      ]
    }
  ]
};

// src/components/blocks/payment-methods.tsx
import Image4 from "next/image";
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { tinaField as tinaField6 } from "tinacms/dist/react";

// src/components/ui/chat-bubble.tsx
import { motion as motion5 } from "motion/react";

// src/components/ui/typewriter-text.tsx
import { useEffect, useRef, useState } from "react";

// src/components/blocks/payment-methods.tsx
var messagesBoubleUser = [
  "Me gusto mucho la prueba gratuita y quiero comprar un servidor, \xBFcuales son los metodos de pago?"
];
var messagesBoubleUserLength = messagesBoubleUser.reduce(
  (acc, curr) => acc + curr.length,
  0
);
var paymentMethodsBlockSchema = {
  name: "paymentMethods",
  label: "M\xE9todos de Pago",
  ui: {
    previewSrc: "/blocks/callout.png",
    defaultItem: {
      titleLine1: "ACEPTAMOS TODAS LAS",
      titleLine2: "BILLETERAS DIGITALES"
    }
  },
  fields: [
    {
      name: "titleLine1",
      label: "T\xEDtulo L\xEDnea 1",
      type: "string"
    },
    {
      name: "titleLine2",
      label: "T\xEDtulo L\xEDnea 2",
      type: "string"
    },
    {
      name: "title",
      label: "T\xEDtulo Completo (Alternativo)",
      type: "string"
    },
    {
      name: "methods",
      label: "M\xE9todos de Pago",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || "M\xE9todo de Pago" })
      },
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "string"
        },
        {
          name: "image",
          label: "Logo / Imagen",
          type: "image"
        },
        {
          name: "description",
          label: "Descripci\xF3n",
          type: "string",
          ui: {
            component: "textarea"
          }
        }
      ]
    }
  ]
};

// src/components/blocks/pricing.tsx
import { tinaField as tinaField7 } from "tinacms/dist/react";
var pricingBlockSchema = {
  name: "pricing",
  label: "Planes de Precios",
  ui: {
    previewSrc: "/blocks/stats.png"
  },
  fields: [
    {
      name: "titleLine1",
      label: "T\xEDtulo L\xEDnea 1",
      type: "string"
    },
    {
      name: "titleLine2",
      label: "T\xEDtulo L\xEDnea 2",
      type: "string"
    },
    {
      name: "discountText",
      label: "Texto Descuento Global (ej: 10%)",
      type: "string"
    },
    {
      name: "plans",
      label: "Planes",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Plan"} - S/${item?.price || 0}`
        })
      },
      fields: [
        {
          name: "name",
          label: "Nombre del Plan",
          type: "string"
        },
        {
          name: "description",
          label: "Descripci\xF3n",
          type: "string",
          ui: {
            component: "textarea"
          }
        },
        {
          name: "price",
          label: "Precio Mensual (S/)",
          type: "number"
        },
        {
          name: "discount",
          label: "Texto Descuento de Tarjeta (ej: 10% DTO.)",
          type: "string"
        },
        {
          name: "block",
          label: "Textura Cubo 3D",
          type: "image"
        },
        {
          name: "features",
          label: "Caracter\xEDsticas del Plan",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => ({ label: item?.feature || "Caracter\xEDstica" })
          },
          fields: [
            {
              name: "feature",
              label: "Caracter\xEDstica",
              type: "string"
            },
            iconSchema
          ]
        }
      ]
    }
  ]
};

// src/components/blocks/versions.tsx
import Image5 from "next/image";
import { tinaField as tinaField8 } from "tinacms/dist/react";
var versionsBlockSchema = {
  name: "versions",
  label: "Versiones y Modloaders",
  ui: {
    previewSrc: "/blocks/features.png"
  },
  fields: [
    {
      name: "titleLine1",
      label: "T\xEDtulo L\xEDnea 1",
      type: "string"
    },
    {
      name: "titleLine2",
      label: "T\xEDtulo L\xEDnea 2",
      type: "string"
    },
    {
      name: "mainCards",
      label: "Tarjetas Principales (Java / Bedrock)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Tarjeta" })
      },
      fields: [
        {
          name: "title",
          label: "T\xEDtulo",
          type: "string"
        },
        {
          name: "image",
          label: "Imagen",
          type: "image"
        }
      ]
    },
    {
      name: "versionFeatures",
      label: "Modloaders / Versiones",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Versi\xF3n" })
      },
      fields: [
        {
          name: "title",
          label: "T\xEDtulo",
          type: "string"
        },
        {
          name: "content",
          label: "Descripci\xF3n",
          type: "string",
          ui: {
            component: "textarea"
          }
        },
        iconSchema
      ]
    }
  ]
};

// tina/collection/page.ts
var Page = {
  label: "P\xE1ginas",
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
    }
  },
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Secciones / Bloques de la P\xE1gina",
      ui: {
        visualSelector: true
      },
      templates: [
        heroBlockSchema,
        hostingFeaturesBlockSchema,
        versionsBlockSchema,
        extendDescriptionBlockSchema,
        locationsBlockSchema,
        pricingBlockSchema,
        paymentMethodsBlockSchema,
        faqBlockSchema
      ]
    }
  ]
};
var page_default = Page;

// tina/config.tsx
var config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main",
  token: process.env.TINA_TOKEN || null,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  schema: {
    collections: [page_default, global_default, legal_default]
  }
});
var config_default = config;
export {
  config_default as default
};
