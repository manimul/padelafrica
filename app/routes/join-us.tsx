import { ActionFunction, Form, useActionData, Link, Meta } from 'remix';

import CTA from '~/Components/cta';
import Hero from '~/Components/campaign-hero';
import BgImg from '~/images/web-bg.jpg';
import Facts from '~/Components/facts';
import MetaImg from '~/images/meta-image.png';

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get('email');
  let name = formData.get('name');
  let company = formData.get('company');
  let event = formData.get('event');

  //process.env.CONVERTKIT_KEY = 'lGf6kOnFOOC-YOikZD_YPw';

  const API_KEY = 'lGf6kOnFOOC-YOikZD_YPw';
  const FORM_ID = '3022054';
  const API = 'https://api.convertkit.com/v3/';

  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: 'post',
    body: JSON.stringify({
      email: email,
      first_name: name,
      fields: { company: company, event: event },
      api_key: API_KEY,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  //console.log({ email }, { name }, { company });
  return res.json();
};

export const meta = () => {
  return {
    title: 'Join Padel Africa - Padel, More Than Sport',
    description:
      'Learn about how you can join Padel Africa in bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Join Padel Africa in proving that padel is more than sport - it is impact. ',
    keywords:
      'padel, africa, investment, sport, ghana, rwanda, kenya, uganda, community',
    'og:image': `https://www.padel.africa${MetaImg}`,
  };
};

export default function JoinUs() {
  let actionData = useActionData();
  let state: 'idle' | 'success' | 'error' = actionData?.subscription
    ? 'success'
    : actionData?.error
    ? 'error'
    : 'idle';
  const darkMode = false;

  return (
    <>
      <div
        style={{
          backgroundImage: ` url('${BgImg}')`,
        }}
        className='text-slate-900 -mt-32 dark:text-white  md:bg-fixed md:bg-center bg-[center_right_-17rem]  md:bg-cover   '
      >
        <Hero
          heading='What happens when the fastest sport meets the fastest continent?
            '
          body='Join Us to Find out
            '
          button1Text='Learn More'
          button1To='#about'
          button2Text='Want to Partner?'
          button2To='#about'
          imgSrc=''
        />
      </div>
      <section className='my-auto bg-white md:p-32 py-12 px-3 flex md:flex-row flex-col justify-between text-black '>
        <div className='md:w-1/2 px-8 space-y-4'>
          <h1 className='text-2xl  font-heading font-black tracking-widest uppercase  '>
            Join Padel Africa
          </h1>
          <div className='space-y-2 '>
            <p>
              So, what happens when the fastest growing sport meets the fastest
              growing continent? Incredible, exciting, life changing things of
              course. Especially if you are one of the canny people sharp enough
              to get involved early.{' '}
            </p>
            <p>
              This is an opportunity to be a part of a transformative journey.
              To be a part of the process of bringing a new sport and lifestyle
              activity to an entire continent.
            </p>
            <h2 className='font-heading text-2xl'>
              Some background information
            </h2>
            <p>
              Padel has seen incredible growth in Europe over the last decade.
              The ease of play has enabled padel to scale and mature faster than
              any other sport. So much so that it is planned to be an exhibition
              sport at the Olympics 2024 and potentially an olympic sport in
              2028.
            </p>
            <p className='font-bold'>
              Padel Africa is a company that is prepared and committed to
              bringing the sport to Africa.
            </p>
            <p>
              Backed by Nordic-African venture capital company{' '}
              <a className='underline font-bold' href='https://bambwagroup.com'>
                Bambwa Group
              </a>
              , and led by their founder and CEO, Michael Mathiesen, Padel
              Africa was founded in 2021 in partnership with two of
              Scandinavia's largest padel businesses - Sweden's{' '}
              <a
                className='underline font-bold'
                href='https://www.padeltotal.se/'
              >
                Padel Total
              </a>{' '}
              and Denmark's{' '}
              <a
                className='underline font-bold'
                href='https://sportyfriends.com/en/home'
              >
                Sportyfriends
              </a>{' '}
              (Owners of the{' '}
              <a
                className='underline font-bold'
                href='https://www.padeliq.io/da'
              >
                Padel iQ
              </a>{' '}
              software).
            </p>
            <p>
              With partners on the ground in Ghana, Kenya, Rwanda, Liberia and
              several other African nations, Padel Africa is perfectly placed to
              lead the charge of pioneering padel across Africa.
            </p>
            <h2 className='font-heading text-2xl'>What do we want from you?</h2>
            <p className='font-bold italic'>
              We are looking for investors eager to be a part of an exciting and
              groundbreaking investment.
            </p>
            <p>
              We are just about to set off on a roadshow where we will present
              to audiences across Denmark and Sweden (see dates and locations on
              this page).
            </p>
            <h3 className='font-bold mt-4 '>
              We would like you to join us to learn:
            </h3>{' '}
            <ul className=' list-disc list-inside'>
              <li>Why are we committed to bringing padel to Africa.</li>
              <li>Who is on our team.</li>
              <li>What makes us so capable of succeeding. </li>
              <li>How you can join us.</li>
            </ul>
          </div>
        </div>
        <aside id='events' className='bg-gray-50 md:w-2/5 h-fit   space-y-2   '>
          <div className='p-8'>
            <h2 className='text-2xl font-heading pb-4'>Events</h2>
            <ul className='space-y-3 text-xs '>
              <p className='italic'>
                Register your interest in the form below and we will keep you
                updated
              </p>
              <li className='line-through opacity-50'>
                <strong>Online webinar </strong> - 23rd August -
                <a
                  className='underline bold'
                  href='https://www.eventbrite.com/x/when-the-fastest-growing-sport-meets-the-fastest-growing-continent-tickets-400567747917'
                >
                  Register on Eventbrite
                </a>
              </li>
              <li className='line-through opacity-50'>
                <strong>Stockholm Padel Expo 2022 </strong> - 16th - 18th
                September -{' '}
                <a className='underline bold' href='mailto:hakan@bambwa.com'>
                  Email for details
                </a>
              </li>
              <li>
                <strong>Gothenburg </strong> - date and time TBC
              </li>
              <li>
                <strong>Malmö</strong> - date and time TBC
              </li>
              <li>
                <strong>Helsingborg</strong> - date and time TBC
              </li>
              <li>
                <strong>Jönköping</strong> - date and time TBC
              </li>
              <li>
                <strong>Copenhagen</strong> - date and time TBC
              </li>
            </ul>
          </div>
          <Form
            className='w-full   my-6 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900   bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-12    h-fit '
            method='post'
            aria-hidden={state === 'success'}
          >
            <fieldset>
              <p className='font-heading text-lg  uppercase mb-4'>
                Interested in hearing more?
              </p>
              <div className='mb-6'>
                <label htmlFor='name' className='block  text-xs   '>
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 dark:text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-gray-400'
                  placeholder='Joe Bloggs'
                  required
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='email' className='block text-xs  '>
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500'
                  placeholder='name@mail.com'
                  required
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='company' className='block text-xs '>
                  Where would you like to meet us?
                </label>
                <select
                  id='event'
                  name='event'
                  className='bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option value='stockholm'>Stockholm</option>
                  <option value='gothenburg'>Gothenburg</option>
                  <option value='malmo'>Malmö</option>
                  <option value='helsingborg'>Helsingborg</option>
                  <option value='jonkoping'>Jönköping</option>
                  <option value='copenhagen'>Copenhagen</option>
                  <option value='copenhagen'>Online</option>
                  <option value='copenhagen'>Don't want to meet</option>
                </select>
              </div>

              <button
                type='submit'
                className=' py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl '
              >
                Submit
              </button>
            </fieldset>
            <p>{actionData?.error ? actionData.message : <> &nbsp; </>}</p>
          </Form>
          <div
            className='w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-75  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit '
            //className={ if (state === "sucess")  {'hidden'} else{'block'} }
            aria-hidden={state !== 'success'}
          >
            <h2 className='text-2xl font-heading'>🚀 You're on the list!</h2>

            <p>
              Thanks for expressing interest, you will be sent an email with
              more information.
            </p>
            <Link className='underline text-green-300' to='.'>
              Start Over
            </Link>
          </div>
        </aside>
      </section>
      <CTA
        heading='Are you interested in partnering with the Number 1 African Padel company?'
        body='At this very early stage in our development we are interested in finding partners from all sectors to investigate partnership possibilities. If this sounds like you - get in touch.'
        buttonText='Contact Us'
        buttonTo='#contact'
      />
    </>
  );
}
