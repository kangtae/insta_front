export default async function fetchGet(url: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
