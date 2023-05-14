import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import greetings from "./greetings.json";

export const GET: RequestHandler = ({ url, request }) => {
  const code =
    url.searchParams.get("code") ?? request.headers.get("accept-language")?.slice(0, 2) ?? "en";

  const lang = greetings[code as keyof typeof greetings];

  return json(lang);
};
