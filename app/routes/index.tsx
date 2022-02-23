import { Form, Link, LoaderFunction, useLoaderData } from 'remix';
import { Meta } from 'remix';
import { getFilms, Film } from '~/api/films';
import CTA from '~/Components/cta';
import Hero from '~/Components/hero';
import HeroAlt from '~/Components/hero-alt';
import HeroWhite from '~/Components/hero-white';

import Info from '~/Components/info';
import infoImg from '../images/about-pa.jpg';
import { getClient, urlFor } from '~/lib/sanity/getClient';
import {
  PortableText,
  PortableTextTypeComponent,
  PortableTextComponentsProvider,
} from '@portabletext/react';

// loader() must be async!
export async function loader() {
  const newsPosts = await getClient().fetch(
    `*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`
  );
  const aboutText = await getClient().fetch(
    `*[_type == "sections" && slug.current == "about-padel-africa" ]{ _id, title, overview, "featureImage": feature.asset->url
   }`
  );
  return { newsPosts, aboutText };
}

// Server Side
//export const loader: LoaderFunction = async ({ request }) => {
//const url = new URL(request.url);
//const title = url.searchParams.get('title');
//return getFilms(title);
//};

export const meta = () => {
  return {
    title: 'Padel Africa | The Number 1 African Padel Company',
    description: 'Padel Africa home page',
    keywords: 'padel, africa, sport',
  };
};

// Client Side

export default function Index() {
  const { newsPosts, aboutText } = useLoaderData();

  const myPortableTextComponents = {
    types: {
      image: (value: any) => (
        <img src={value.asset} key={value._id} className={value.asset}></img>
      ),
    },
  };
  //const films = useLoaderData<Film[]>();
  return (
    <>
      <Hero
        heading='Padel has taken Europe by storm. Now it’s time to bring it to Africa.
        '
        body='Using our extensive knowledge of Africa and business development, we aim to provide Padel, as a sport and a community enabler, to Ghana, Kenya, Nigeria and other Sub Saharan countries.
        '
        button1Text='Learn More'
        button1To='#about'
        button2Text='Want to Partner?'
        button2To='#about'
        imgSrc=''
      />
    </>
  );
}
