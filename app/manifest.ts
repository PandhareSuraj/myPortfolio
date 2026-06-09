import type { MetadataRoute } from "next";
import { assetPath, basePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Suraj Pandhare Portfolio",
    short_name: "Suraj.dev",
    description: "Full stack and Android developer portfolio for Suraj Pandhare.",
    start_url: `${basePath || "/"}`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: assetPath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
