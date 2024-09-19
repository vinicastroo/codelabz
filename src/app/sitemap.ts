export default async function sitemap() {
  const defaultPaths = [
    {
      url: 'https://www.codelabz.com.br/',
      lastModified: new Date(),
    },
  ]

  return [...defaultPaths]
}
