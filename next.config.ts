import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/myPortfolio" : undefined,
  assetPrefix: isGithubPages ? "/myPortfolio/" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app"
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com"
      }
    ]
  }
};

export default nextConfig;
