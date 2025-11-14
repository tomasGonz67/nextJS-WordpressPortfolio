export const fetchData = async (endpoint: string) => {
  const apiBase = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const token = process.env.STRAPI_READ_TOKEN;

  const res = await fetch(`${apiBase}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};