import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio/:event/stills",
        destination: "/portfolio/:event/images",
        permanent: true,
      },
      {
        source: "/portfolio/:event/stills/:album",
        destination: "/portfolio/:event/images/:album",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
