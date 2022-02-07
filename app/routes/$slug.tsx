import { useLoaderData } from 'remix';

import { getClient } from '~/lib/sanity/getClient';

export async function loader({ params }: { params: any }) {
  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!
  const initialData = await getClient().fetch(
    `*[_type == "news" && slug.current == $slug]{ _id, title, slug, "featureImage": feature.asset->url
  }`,
    { slug: params.slug }
  );

  return { initialData };
}

export default function NewsPost() {
  let { initialData } = useLoaderData();

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1>{initialData[0].title}</h1>
      <img src={initialData[0].featureImage}></img>
    </div>
  );
}
