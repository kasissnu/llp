import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Leading Lines Photography",
    short_name: "Leading Lines",
    description:
      "Bengaluru wedding photography and films for weddings, pre-weddings, family events, and portraits.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5ef",
    theme_color: "#2b2824",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo-leading-lines.png",
        sizes: "500x300",
        type: "image/png",
      },
    ],
  };
}
