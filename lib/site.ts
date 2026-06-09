export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pandharesuraj.github.io/myPortfolio";

export function assetPath(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
