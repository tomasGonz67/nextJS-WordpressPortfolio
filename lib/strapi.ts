export const fetchData = async (endpoint: string) => {
  const apiBase = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  
  // Use production token for prod URL, local token for localhost
  const isProduction = apiBase.includes('strapiapp.com');
  const token = isProduction 
    ? process.env.STRAPI_PROD_TOKEN 
    : process.env.STRAPI_LOCAL_TOKEN;

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