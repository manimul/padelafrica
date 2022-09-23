export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://www.padel.africa/</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/about</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/join-us</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/contact</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/presenting-padel-africa-to-the-nigerian-embassy</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/meet-us-at-padel-expo-2022</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/invest-in-padel-africa</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/when-the-fastest-growing-sport-meets-the-fastest-growing-continent</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/well-known-ice-hockey-and-padel-profiles-invest-in-padel-africa</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/padel-expo-2022-wrap-up</loc>
      </url>
      
      </urlset>
      `;
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
};
