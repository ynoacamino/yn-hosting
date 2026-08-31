import client from "@tina/__generated__/client";
import { DEFAULT_REVALIDATE } from "@/config/variables";
import ClientPage from "./[...urlSegments]/client-page";

export default async function Home() {
  const data = await client.queries.page(
    { relativePath: "home.mdx" },
    { fetchOptions: { next: { revalidate: DEFAULT_REVALIDATE } } },
  );

  return <ClientPage {...data} />;
}
