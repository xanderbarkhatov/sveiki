import { json } from "@sveltejs/kit";
import greetings from "./greetings.json";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url, request }) => {
  const codeFromQuery = url.searchParams.get("code");
  const codeFromHeader = request.headers.get("accept-language")?.slice(0, 2);
  const code = (codeFromQuery ?? codeFromHeader) as keyof typeof greetings;
  const lang = greetings[code] ?? greetings.en;

  return json(lang, {
    headers: {
      "Cache-Control": codeFromQuery ? "s-maxage=2592000" : "s-maxage=0",
    },
  });
};
