import client from "@tina/__generated__/client";
import {
  DEFAULT_LOGO_PATH,
  SITE_NAME,
  TINA_GLOBAL_PATH,
} from "@/config/variables";

interface GlobalData {
  logo: string;
  title: string;
  description?: string;
}

export async function getGlobalData(): Promise<GlobalData> {
  let logo = DEFAULT_LOGO_PATH;
  let title = SITE_NAME;
  let description: string | undefined;

  try {
    const globalData = await client.queries.global({
      relativePath: TINA_GLOBAL_PATH,
    });
    if (globalData?.data?.global?.logo) logo = globalData.data.global.logo;
    if (globalData?.data?.global?.title) title = globalData.data.global.title;
    if (globalData?.data?.global?.description)
      description = globalData.data.global.description;
  } catch {
    // fallback a defaults si no esta generado aun
  }

  return { logo, title, description };
}
