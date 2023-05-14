import type { RequestHandler } from "./$types"
import langs from "./langs.json"

export const GET: RequestHandler = ({ url, request }) => {
  const code =
    url.searchParams.get("code") ?? request.headers.get("accept-language")?.slice(0, 2) ?? "en"

  const lang = langs[code as keyof typeof langs]

  return new Response(lang.greeting)
}
