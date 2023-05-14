import { error } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = ({ url }) => {
  const code = url.searchParams.get("code")

  if (!code) {
    throw error(400, "Language code is required")
  }

  return new Response("Hello")
}
