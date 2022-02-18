import { Form, Link, LoaderFunction, useLoaderData } from 'remix';
import { Meta } from 'remix';
import { getFilms, Film } from '~/api/films';
import CTA from '~/Components/cta';
import Hero from '~/Components/hero';
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

export default function OldIndex() {
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

      <Info flow='left' />
      <CTA
        heading='Are you interested in partnering with the Number 1 African Padel company?'
        body='Integer a eros venenatis, interdum lorem eu, lobortis ligula. Curabitur vel ipsum non tellus convallis elementum. Vivamus pulvinar risus nec sapien commodo bibendum'
        buttonText='Click here'
        buttonTo='#about'
      />

      <section className='[cta]  p-vw-32 pb-0  space-x-10 flex '>
        <figure className='w-1/4'>
          <img src={infoImg} />
        </figure>
        <blockquote className='w-3/4 space-y-4  '>
          <h2 className='text-3xl font-bold'>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </h2>

          {/* The 2 PortableText instances below will receive the same custom components */}
        </blockquote>
      </section>

      <section
        id='news'
        className='[about]  p-vw-32 bg-white text-center space-y-vw-6-min@xl '
      >
        <h2 className='text-4xl font-bold'>News</h2>

        {/*
        //SEARCH FILTER
        <Form className='py-5'>
          <label>
            <input
              type='text'
              name='title'
              placeholder='enter something'
              className='border-2 rounded py-2 px-2'
            />
          </label>
          <button
            type='submit'
            className='bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded mx-2'
          >
            Search{' '}
          </button>
        </Form>
  */}

        {/*
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
          {films.slice(0, 4).map((film) => (
            <div className='hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer  p-4  space-y-vw-4-max@md'>
              <img
                className='aspect-square rounded-md  '
                src={film.image}
                alt={film.title}
              />
              <div>{film.title}</div>
            </div>
          ))}{' '}
        </div>
          */}

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
          {newsPosts?.length > 0
            ? newsPosts.slice(0, 6).map((news: any) => (
                <div
                  key={news._id}
                  className='hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer  p-4  space-y-vw-4-max@md'
                >
                  <img
                    src={urlFor(news.featureImage).width(500).url()}
                    alt={news.title}
                  />

                  <Link to={news.slug.current}>{news.title} </Link>
                </div>
              ))
            : null}
        </div>
      </section>

      <section
        id='contact'
        className='[contact]  bg-slate-900   space-x-10   p-vw-32  space-y-10 md:space-x-10 flex flex-col  text-white '
      >
        <div className='  m-auto  text-center m space-y-vw-6-min@xl md:w-1/2 '>
          <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 '>
            Contact Us
          </h2>
          <p className='base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className=' space-x-vw-4-min@xl  md:inline-flex justify-between text-slate-900'>
            <button className='py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-green-300   to-yellow-400 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'>
              Email Us
            </button>
            <button className=' py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-white   to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'>
              Join Mailing List
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
