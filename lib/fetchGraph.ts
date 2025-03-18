export const fetchGraphQL = async (query: string) => {
    const graphEndpoint = "https://irp.iml.mybluehost.me/website_cebc75f6/https://irp.iml.mybluehost.me/website_cebc75f6/https://irp.iml.mybluehost.me/website_cebc75f6/graphql";
    const res = await fetch(graphEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const { data } = await res.json();
    return data;
  };