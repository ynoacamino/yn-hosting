import client from "@tina/__generated__/client";
import { notFound } from "next/navigation";
import { DEFAULT_REVALIDATE } from "@/config/variables";
import ClientPage from "./client-page";

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ urlSegments: string[] }>;
}) {
  const resolvedParams = await params;
  const filepath = resolvedParams.urlSegments.join("/");

  try {
    const data = await client.queries.page(
      { relativePath: `${filepath}.mdx` },
      { fetchOptions: { next: { revalidate: DEFAULT_REVALIDATE } } },
    );
    return <ClientPage {...data} />;
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    let pages = await client.queries.pageConnection();
    const allPages = pages;

    if (!allPages.data.pageConnection.edges) {
      return [];
    }

    while (pages.data.pageConnection.pageInfo.hasNextPage) {
      pages = await client.queries.pageConnection({
        after: pages.data.pageConnection.pageInfo.endCursor,
      });

      if (!pages.data.pageConnection.edges) {
        break;
      }

      allPages.data.pageConnection.edges.push(
        ...pages.data.pageConnection.edges,
      );
    }

    const params = allPages.data?.pageConnection.edges
      .map((edge) => ({
        urlSegments: edge?.node?._sys.breadcrumbs || [],
      }))
      .filter((x) => x.urlSegments.length >= 1)
      .filter((x) => !x.urlSegments.every((x) => x === "home"));

    return params || [];
  } catch {
    return [];
  }
}
