import { error } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import langs from "./langs.json"

export const GET: RequestHandler = ({ url }) => {
  const code = url.searchParams.get("code")

  if (!code) {
    throw error(400, "Language code is required")
  }

  const lang = langs[code as keyof typeof langs]

  if (!lang) {
    throw error(404, "Language not found")
  }

  return new Response(lang.greeting)
}
