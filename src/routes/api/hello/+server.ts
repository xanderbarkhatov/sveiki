import { json } from "@sveltejs/kit";
import greetings from "./greetings.json";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url, request }) => {
  const code = url.searchParams.get("code") ?? request.headers.get("accept-language")?.slice(0, 2);
  const lang = greetings[code as keyof typeof greetings] ?? greetings.en;

  return json(lang, {
    headers: {
      "Cache-Control": "s-maxage=2592000",
    },
  });
};
