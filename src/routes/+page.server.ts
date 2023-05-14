import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ fetch }) => {
  const greeting = await fetch("/api/hello").then((res) => res.text())

  return { greeting }
}
