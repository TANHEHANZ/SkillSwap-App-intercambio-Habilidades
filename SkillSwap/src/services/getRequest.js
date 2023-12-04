import { http } from "./https";

export const peticionPostPut = async (url,contenido,metodo) => {
  const responde = await fetch(http + url, {
    method: metodo ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(contenido),
  });
  if (responde.ok) {
    const json = await responde.json();
    return json;
  }
  return null;
};

export const peticiongetdelete = async (url, metodo) => {
  const responde = await fetch(http+url, {
    method: metodo ? "DELETE" : "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  if (responde.ok) {
    const json = await responde.json();
    return json;
  }
  return null;
};
