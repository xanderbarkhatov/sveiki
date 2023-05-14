import type { Greeting } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const greeting: Greeting = await fetch("/api/hello").then((res) => res.json());

  return greeting;
};
