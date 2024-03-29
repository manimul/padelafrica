import {
  Form,
  Link,
  LoaderFunction,
  useLoaderData,
  ActionFunction,
} from 'remix';
import { Meta } from 'remix';
import heroImg from '../images/padel-hero.jpg';
import BgImg from '~/images/web-bg.jpg';
import MetaImg from '~/images/meta-image.png';

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
import Contact from '~/Components/contact';

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

  const teamMembers = await getClient().fetch(
    `*[_type == "team" && (myTags[0].value=="management" ||myTags[1].value=="management"  ) ]{ _id, title, boardPosition, myTags, linkedinUrl, overview,role, "featureImage": feature.asset->url
   }`
  );

  const boardMembers = await getClient().fetch(
    `*[_type == "team" && (myTags[0].value=="board" || myTags[1].value=="board"  ) ]{ _id, title, boardPosition, myTags, linkedinUrl, overview,role, "featureImage": feature.asset->url
   }`
  );
  return { newsPosts, aboutText, teamMembers, boardMembers };
}

// Server Side
//export const loader: LoaderFunction = async ({ request }) => {
//const url = new URL(request.url);
//const title = url.searchParams.get('title');
//return getFilms(title);
//};

export const meta = () => {
  return {
    title: 'Padel Africa - Padel, More Than Sport',
    description:
      'Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Padel is more than sport - it is impact. ',
    keywords: 'padel, africa, sport, ghana, rwanda, kenya, uganda, community',
    'og:image': `https://www.padel.africa${MetaImg}`,
  };
};

// Client Side

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get('email');
  let name = formData.get('name');
  let company = formData.get('company');
  //process.env.CONVERTKIT_KEY = 'lGf6kOnFOOC-YOikZD_YPw';

  const API_KEY = 'lGf6kOnFOOC-YOikZD_YPw';
  const FORM_ID = '3022054';
  const API = 'https://api.convertkit.com/v3/';

  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: 'post',
    body: JSON.stringify({
      email: email,
      first_name: name,
      fields: { company: company },
      api_key: API_KEY,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  //console.log({ email }, { name }, { company });
  return res.json();
};
export default function Index() {
  const { newsPosts, aboutText, teamMembers, boardMembers } = useLoaderData();
  const darkMode = false;

  const myPortableTextComponents = {
    types: {
      image: (value: any) => (
        <img src={value.asset} key={value._id} className={value.asset}></img>
      ),
    },
  };
  //const films = useLoaderData<Film[]>();
  return (
    <div
      style={{
        backgroundImage: ` ${
          darkMode
            ? ' linear-gradient(to right, rgba(255, 255, 255,1)'
            : ' linear-gradient(to right, rgba(15, 23, 42,1)'
        }     , rgba(255, 255, 255, 0.1)),url('${heroImg}')`,
      }}
      className='text-slate-900 dark:text-white  bg-cover bg-fixed -mt-28  pt-16 md:pt-0  '
    >
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
        body='At this very early stage in our development we are interested in finding partners from all sectors to investigate partnership possibilities. If this sounds like you - get in touch.'
        buttonText='Contact Us'
        buttonTo='#contact'
      />

      {/*


 <section className='[cta]  p-vw-32  space-x-10 flex '>
        <figure className='w-1/4'>
          <img src={infoImg} />
        </figure>
        <blockquote className='w-3/4 space-y-4  '>
          <h2 className='text-4xl font-heading text-slate-900  dark:text-white'>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </h2>

        </blockquote>
      </section>

         <section
        id='news'
        className='[about]  p-vw-32 bg-white  dark:bg-slate-900 text-center space-y-vw-6-min@xl '
      >
        <h2 className='text-4xl font-bold text-slate-900 dark:text-white '>
          News
        </h2>

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

                  <Link
                    className='text-slate-900 dark:text-white'
                    to={news.slug.current}
                  >
                    {news.title}{' '}
                  </Link>
                </div>
              ))
            : null}
        </div>
      </section>





          */}

      <section
        id='news'
        className='[about] mt-20  p-vw-32 bg-white  dark:bg-slate-900 text-center space-y-vw-6-min@xl '
      >
        <h2 className='text-2xl  font-heading font-black tracking-widest uppercase  text-slate-900 dark:text-white '>
          Management Team
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
          {teamMembers?.length > 0
            ? teamMembers?.slice(0, 6).map((teamMember: any) => (
                <div
                  key={teamMember._id}
                  className='hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer  p-4  space-y-vw-2-max@md'
                >
                  <img
                    src={urlFor(teamMember.featureImage).width(500).url()}
                    alt={teamMember.title}
                  />
                  <h3 className='font-bold'>{teamMember.title} </h3>
                  <p className='font-light uppercase text-xs opacity-50 mb-4'>
                    {teamMember.role}{' '}
                  </p>

                  <a
                    className='text-slate-900 dark:text-green-500 underline cursor-pointer'
                    href={teamMember.linkedinUrl}
                  >
                    Linkedin
                  </a>
                </div>
              ))
            : null}
        </div>
      </section>

      <section
        id='news'
        className='[about]  p-vw-32 bg-gray-100  dark:bg-slate-800 text-center space-y-vw-6-min@xl '
      >
        <h2 className='text-2xl  font-heading  tracking-widest uppercase  text-slate-900 dark:text-white '>
          Board of Directors
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
          {boardMembers?.length > 0
            ? boardMembers?.slice(0, 6).map((boardMember: any) => (
                <div
                  key={boardMember._id}
                  className='hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer  p-4  space-y-vw-2-max@md'
                >
                  <img
                    src={urlFor(boardMember.featureImage).width(500).url()}
                    alt={boardMember.title}
                  />
                  <h3 className='font-bold'>{boardMember.title} </h3>
                  <p className='font-light uppercase text-xs opacity-50 mb-4'>
                    {boardMember.boardPosition}{' '}
                  </p>
                  <a
                    className='text-slate-900 dark:text-green-500 underline cursor-pointer'
                    href={boardMember.linkedinUrl}
                  >
                    Linkedin
                  </a>
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
          <h2 className='text-2xl  font-heading  tracking-widest uppercase  text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 '>
            Contact Us
          </h2>
          <p className='base'>
            If you are an invester, a potential partner or anyone interested in
            learning more about Padel Africa, you can reach us directly with the
            following details.
          </p>
          <div className=' space-x-vw-4-min@xl  md:inline-flex justify-between text-slate-900'>
            <a
              href='mailto:hello@padel.africa'
              className='py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-green-300   to-yellow-400 font-heading uppercase tracking-widest  hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'
            >
              Email Us
            </a>
            <a
              href='tel:0046739787764'
              className=' py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-white   to-gray-200 font-heading uppercase tracking-widest  hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'
            >
              Telephone
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
