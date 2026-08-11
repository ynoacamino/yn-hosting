/* eslint-disable no-console */

import MillionLint from "@million/lint";
import type { NextConfig } from "next";

const baseConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ["cms.enderhost.net.pe", "ynoa-uploader.ynoacamino.me"],
  },
};

const nextConfig: NextConfig =
  process.env.NODE_ENV === "production"
    ? (() => {
        return MillionLint.next({ rsc: true })(baseConfig);
      })()
    : (() => {
        return baseConfig;
      })();

export default nextConfig;
