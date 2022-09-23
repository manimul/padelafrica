import { useLoaderData, MetaFunction, Link, Links } from 'remix';
import { format, formatDistance, subDays } from 'date-fns';

import { getClient } from '~/lib/sanity/getClient';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@portabletext/react';
import MetaImg from '~/images/meta-image.png';

import HeroMain from '~/Components/hero-main';
import CTAMail from '~/Components/cta-mail';

const components: PortableTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className='text-gray-600 font-semibold'>{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className='underline font-bold hover:text-green-500 transition-colors ease-in-out'
          //rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },
  },
};

export async function loader({ params }: { params: any }) {
  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!
  const initialData = await getClient().fetch(
    `*[_type == "news" && slug.current == $slug]{ _id, title, slug, "featureImage": feature.asset->url, overview, publishedDate, extract, meta
  }`,
    { slug: params.slug }
  );

  return { initialData };
}

export const meta: MetaFunction = ({ data = useLoaderData() }) => {
  if (!data) {
    return {
      title: 'Padel Africa News - Padel, More Than Sport',
      description:
        'Learn about how Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Padel is more than sport - it is impact. ',
      'og:image': `https://www.padel.africa${MetaImg}`,
    };
  }

  let { news } = data.initialData[0];

  return {
    title: `Padel Africa News - ${data.initialData[0].title}`,
    description: data.initialData[0].meta,
    'og:image': data.initialData[0].featureImage,
  };
};

export default function NewsPost() {
  let { initialData } = useLoaderData();
  let news = initialData[0];
  let postDate2 = formatDistance(
    subDays(new Date(news.publishedDate), 3),
    new Date(),
    { addSuffix: true }
  );

  let postDate =
    'First published on ' +
    format(new Date(news.publishedDate), 'dd MMMM yyyy');
  console.log(postDate);
  console.log(postDate2);

  return (
    <>
      <HeroMain
        heading={news.title}
        subtitle={postDate}
        button1Text='Read the Article'
        button1To='#news'
        imgSrc={news.featureImage}
      ></HeroMain>
      <section
        id='news'
        className='p-6 md:px-32 max-w-4xl mx-auto  md:py-24  space-y-6   bg-white justify-between text-black '
      >
        {news.overview?.length > 0
          ? news.overview.map((paragraphs: any) => (
              <PortableText
                key={paragraphs._id}
                value={[paragraphs]}
                components={components}
              />
            ))
          : null}
      </section>
      <section>
        {' '}
        <CTAMail
          heading='Sign up to the Padel Africa newsletter'
          body='Subscribe and ensure to be among the first to find out about all our updates and special offers.'
          buttonText='Contact Us'
          buttonTo='#contact'
        />
      </section>
    </>
  );
}
