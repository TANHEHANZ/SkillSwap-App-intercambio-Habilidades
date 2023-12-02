import { useState } from "react";

const complementUrl = "localhost//8000";

export const peticionPostPut = async (url, metodo,contenido) => {
  const responde = await fetch(complementUrl + url, {
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
  const responde = await fetch(url, {
    method: metodo ? "DELETE" : "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  if (responde.ok) {
    const json = await responde.json();
    return json;
  }
  return null;
};

// const [data, setData] = useState("");
// const fechedData = async () => {
//   try {
//     const result = await peticionPostPut("espera url");
//     setData(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
