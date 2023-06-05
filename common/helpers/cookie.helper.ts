"use server";

import { cookies } from "next/headers";

export async function setCookie(value: string) {
  cookies().set("favorite", value);
}

export async function getCookie() {
  return cookies().get("favorite")?.value;
}

export async function removeCookie() {
  cookies().delete("favorite");
}
