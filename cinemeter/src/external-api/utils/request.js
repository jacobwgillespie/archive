export default async function(url) {
  const data = await (await fetch(url)).json();

  return data;
}
