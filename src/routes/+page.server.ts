import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ request, fetch }) => {
  const code = request.headers.get("accept-language")?.slice(0, 2) ?? "en"
  const greeting = await fetch("/api/hello?code=" + code).then((res) => res.text())

  return { greeting }
}
