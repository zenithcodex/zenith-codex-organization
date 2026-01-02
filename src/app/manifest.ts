import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zenith Codex",
    short_name: "Zenith",
    description:
      "Building infrastructure for the next paradigm. A collective of engineers architecting the future.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0F",
    theme_color: "#0D0D0F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
