export enum InicioSections {
  COMENZAR_AHORA = "inicio-comenzar-ahora",
  CREA_TU_SERVIDOR = "inicio-crea-tu-servidor",
  SOPORTAMOS_TODOS_LOS_MINECRAFTS = "inicio-soportamos-todos-los-minecrafts",
  CARACTERISTICAS = "incio-caracteristicas",
  PREGUNTAS_FRECUENTES = "incio-preguntas-frecuentes",
  DESCUBRE_NUESTRAS_UBICACIONES = "inicio-descubre-nuestras-ubicaciones",
}

export enum ConocenosSections {}

export enum PreciosSections {
  ELIGUE_EL_MEJOR = "precios-eligue-el-mejor",
  PLAN_ROCA = "precios-plan-roca",
  PLAN_CARBON = "precios-plan-carbon",
  PLAN_HIERRO = "precios-plan-hierro",
  PLAN_ORO = "precios-plan-oro",
  PLAN_DIAMANTE = "precios-plan-diamante",
  PLAN_NETHERITA = "precios-plan-netherita",
  METODOS_DE_PAGO = "metodos-de-pago",
}

export enum PreguntasSections {
  SOBRE_EL_JUEGO = "preguntas-sobre-el-juego",
  SOBRE_EL_HOSTING = "preguntas-sobre-el-hosting",
  RECOMENDACIONES_EN_GENERAL = "preguntas-recomendaciones-en-general",
}

interface SectionInterface {
  name: string;
  id: string;
}

interface PageInterface {
  sections?: SectionInterface[];
  name: string;
  path: string;
}

interface PageConfigInterface {
  pages: PageInterface[];
}

const pageConfig: PageConfigInterface = {
  pages: [
    {
      name: "Inicio",
      path: "/",
      sections: [
        {
          name: "Comenzar ahora",
          id: InicioSections.COMENZAR_AHORA,
        },
        {
          name: "Crea tu servidor",
          id: InicioSections.CREA_TU_SERVIDOR,
        },
        {
          name: "Soportamos todos los minecraft's",
          id: InicioSections.SOPORTAMOS_TODOS_LOS_MINECRAFTS,
        },
        {
          name: "Características",
          id: InicioSections.CARACTERISTICAS,
        },
        {
          name: "Preguntas frecuentes",
          id: InicioSections.PREGUNTAS_FRECUENTES,
        },
      ],
    },
    {
      name: "Precios y métodos de pago",
      path: "/precios",
      sections: [
        {
          name: "Elige el mejor plan",
          id: PreciosSections.ELIGUE_EL_MEJOR,
        },
        {
          name: "Plan Roca",
          id: PreciosSections.PLAN_ROCA,
        },
        {
          name: "Plan Carbón",
          id: PreciosSections.PLAN_CARBON,
        },
        {
          name: "Plan Hierro",
          id: PreciosSections.PLAN_HIERRO,
        },
        {
          name: "Plan Oro",
          id: PreciosSections.PLAN_ORO,
        },
        {
          name: "Plan Diamante",
          id: PreciosSections.PLAN_DIAMANTE,
        },
        {
          name: "Plan Netherita",
          id: PreciosSections.PLAN_NETHERITA,
        },
        {
          name: "Métodos de pago",
          id: PreciosSections.METODOS_DE_PAGO,
        },
      ],
    },
    {
      name: "Preguntas",
      path: "/preguntas",
      sections: [
        {
          name: "Sobre el juego",
          id: PreguntasSections.SOBRE_EL_JUEGO,
        },
        {
          name: "Sobre el servidor",
          id: PreguntasSections.SOBRE_EL_HOSTING,
        },
        {
          name: "Recomendaciones",
          id: PreguntasSections.RECOMENDACIONES_EN_GENERAL,
        },
      ],
    },
    {
      name: "Prueba gratuita",
      path: "/prueba-gratuita",
    },
  ],
};

export default pageConfig;
