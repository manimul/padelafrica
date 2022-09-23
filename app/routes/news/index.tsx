import CTAMail from '~/Components/cta-mail';
import EventImg from '~/images/event_ad.png';
import { Link, Meta, useLoaderData } from 'remix';
import Hero from '~/Components/hero-alt';
import HeroMain from '~/Components/hero-main';
import { getClient, urlFor } from '~/lib/sanity/getClient';
import Button from '~/Components/button';
import { PortableText } from '@portabletext/react';
import heroImg from '~/images/padel-hero.jpg';
import MetaImg from '~/images/meta-image.png';

export async function loader() {
  const newsPosts = await getClient().fetch(
    `*[_type == "news"] | order(_createdAt desc) { _id, title, slug, "featureImage": feature.asset->url, extract
       }`
  );
  return { newsPosts };
}

export const meta = () => {
  const { newsPosts } = useLoaderData();

  return {
    title: 'Padel Africa News - Padel, More Than Sport',
    description:
      'Learn about how Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Padel is more than sport - it is impact. ',
    keywords:
      'padel, africa, sport, ghana, rwanda, kenya, uganda, community, impact',
    'og:image': `https://www.padel.africa${MetaImg}`,
  };
};

export default function News() {
  const { newsPosts } = useLoaderData();

  return (
    <>
      <HeroMain
        heading='Padel Africa News'
        subtitle='Get the latest news and updates. '
        button1Text='See All News'
        button1To='#news'
        imgSrc={heroImg}
      />

      <section
        id='news'
        className='py-12 max-w-screen-lg  mx-auto  px-4 md:px-0 bg-white  text-black '
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 '>
          {newsPosts?.length > 0
            ? newsPosts.slice(0, 6).map((news: any) => (
                <div
                  key={news._id}
                  className='flex flex-col group max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-slate-900 dark:border-slate-700 hover:-translate-y-1  transition ease-in-out'
                >
                  <Link to={news.slug.current}>
                    <div className='overflow-hidden '>
                      <img
                        className='rounded-t-lg h-48 w-full object-cover group-hover:scale-110 transition ease-in-out  '
                        src={urlFor(news.featureImage).width(500).url()}
                        alt=''
                      />
                    </div>
                  </Link>
                  <div className='p-5 flex flex-col h-full '>
                    <Link to={news.slug.current}>
                      <h5 className=' text-2xl font-heading tracking-tight text-gray-900 dark:text-white '>
                        {news.title}
                      </h5>
                    </Link>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow'>
                      {news.extract?.length > 0
                        ? news.extract.map((paragraphs: any) => (
                            <PortableText
                              key={paragraphs._id}
                              value={[paragraphs]}
                              //components={myPortableTextComponents}
                            />
                          ))
                        : null}
                    </p>
                    <Button to={news.slug.current} title='Read More' />
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>

      <CTAMail
        heading='Sign up to the Padel Africa newsletter'
        body='Subscribe and ensure to be among the first to find out about our updates and special offers.'
        buttonText='Contact Us'
        buttonTo='#contact'
      />
    </>
  );
}
