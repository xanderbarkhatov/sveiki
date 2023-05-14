import satori from "satori";
import { initWasm, Resvg } from "@resvg/resvg-wasm";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

await initWasm(
  await fetch("https://unpkg.com/@resvg/resvg-wasm/index_bg.wasm").then((r) => r.arrayBuffer())
);

export const GET: RequestHandler = async ({ url }) => {
  const text = url.searchParams.get("text");

  if (!text) {
    throw error(400, "Missing text query parameter");
  }

  const fontFile = await fetch("https://og-playground.vercel.app/inter-latin-ext-700-normal.woff");
  const fontData = await fontFile.arrayBuffer();

  const svg = await satori(
    {
      type: "div",
      props: {
        children: text,
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 128,
          background: "#1a1a1a",
          color: "#e6e6e6",
        },
      },
    },
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Inter Latin",
          style: "normal",
          data: fontData,
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200,
    },
  });

  const image = resvg.render().asPng();

  return new Response(image, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
