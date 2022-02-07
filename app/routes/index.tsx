import { Form, Link, LoaderFunction, useLoaderData } from 'remix';
import { Meta } from 'remix';
import { getFilms, Film } from '~/api/films';
import CTA from '~/Components/cta';
import Hero from '~/Components/hero';
import Info from '~/Components/info';
import infoImg from '../images/about-pa.jpg';
import { getClient } from '~/lib/sanity/getClient';

// loader() must be async!
export async function loader() {
  const newsPosts = await getClient().fetch(
    `*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`
  );
  return { newsPosts };
}

// Server Side
//export const loader: LoaderFunction = async ({ request }) => {
//const url = new URL(request.url);
//const title = url.searchParams.get('title');
//return getFilms(title);
//};

export const meta = () => {
  return {
    title: 'A title for this route',
    description: 'A description for the route',
    keywords: 'remix, javascript, rct',
  };
};

// Client Side

export default function Index() {
  const { newsPosts } = useLoaderData();
  console.log(newsPosts);

  //const films = useLoaderData<Film[]>();
  return (
    <>
      <Hero
        heading='Bringing Padel to Africa'
        body='Integer a eros venenatis, interdum lorem eu, lobortis ligula. Curabitur vel ipsum non tellus convallis elementum. Vivamus pulvinar risus nec sapien commodo bibendum'
        button1Text='Learn More'
        button1To='#about'
        button2Text='Want to Partner?'
        button2To='#about'
        imgSrc=''
      />

      <Info
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        body='Integer a eros venenatis, interdum lorem eu, lobortis ligula. Curabitur vel ipsum non tellus convallis elementum. Vivamus pulvinar risus nec sapien commodo bibendum. '
        flow='left'
        image='#'
      />
      <CTA
        heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
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
          <p className='base'>The Author</p>
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
                    className='aspect-square rounded-md  '
                    src={news.featureImage}
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
        className='[contact]  bg-slate-900  p-vw-32 space-x-10 flex flex-col text-white '
      >
        <div className='  m-auto  text-center m space-y-vw-6-min@xl w-1/2 '>
          <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 '>
            Contact Us
          </h2>
          <p className='base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='md:space-x-vw-4-min@xl'>
            <Link to='#' className=' inline-flex '>
              <button className='py-4 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 rounded-xl text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'>
                Email Us
              </button>
            </Link>
            <Link to='#' className=' inline-flex '>
              <button className=' py-4 px-6 bg-gradient-to-br  from-white text-slate-900  to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'>
                Join Mailing List
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
