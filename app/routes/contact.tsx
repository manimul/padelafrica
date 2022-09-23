import { ActionFunction, Form, useActionData, Link, Meta } from 'remix';

import CTA from '~/Components/cta';
import Hero from '~/Components/campaign-hero';
import BgImg from '~/images/web-bg.jpg';
import Facts from '~/Components/facts';
import CTAMail from '~/Components/cta-mail';
import MetaImg from '~/images/meta-image.png';

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get('email');
  let name = formData.get('name');
  let message = formData.get('message');

  //process.env.CONVERTKIT_KEY = 'lGf6kOnFOOC-YOikZD_YPw';

  const API_KEY = 'lGf6kOnFOOC-YOikZD_YPw';
  const FORM_ID = '3022054';
  const API = 'https://api.convertkit.com/v3/';

  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: 'post',
    body: JSON.stringify({
      email: email,
      first_name: name,
      fields: { message: message },
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
    title: 'Contact Padel Africa - Padel, More Than Sport',
    description:
      'Contact Padel Africa and get in touch to discuss how you would like to be involved in bringing padel, as a sport, a lifestyle, and a community builder, to Africa.   ',
    keywords:
      'padel, africa, sport, contact, ghana, rwanda, kenya, uganda, community',
    'og:image': `https://www.padel.africa${MetaImg}`,
  };
};

export default function Contact() {
  let actionData = useActionData();
  let state: 'idle' | 'success' | 'error' = actionData?.subscription
    ? 'success'
    : actionData?.error
    ? 'error'
    : 'idle';
  const darkMode = false;

  return (
    <>
      <section className='my-auto bg-white md:px-32 md:py-24 py-12 px-3 flex md:flex-row flex-col justify-between text-black '>
        <div className='md:w-1/2 px-8 space-y-4'>
          <h1 className='text-2xl  font-heading font-black tracking-widest uppercase  '>
            Contact Padel Africa
          </h1>
          <div className='space-y-2 '>
            <p>
              Please get in touch if you have any questions or would like to
              discuss partnership or investment oppurtunities.
            </p>
            <div>
              <div className='flex items-start mt-8 text-slate-800'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  className='w-8 h-8 text-slate-800'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div className='ml-4 text-md tracking-wide font-semibold w-64'>
                  Padel Africa AB, Klostergatan 2, 222 22 Lund, Sweden <br></br>{' '}
                  Org.nr: 559341-5770
                </div>
              </div>
              <a
                href='tel:0046739787764'
                className='underline flex items-center mt-4 text-slate-800'
              >
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  className='w-8 h-8 text-slate-800'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <div className='ml-4 text-md tracking-wide font-semibold  underline hover:text-green-500 transition-colors ease-in-out '>
                  +46 73 978 77 64
                </div>
              </a>
              <a
                href='mailto:hello@padel.africa'
                className='flex items-center mt-2 text-slate-800 '
              >
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  className='w-8 h-8 text-slate-800'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <div className='ml-4 text-md tracking-wide font-semibold underline hover:text-green-500 transition-colors ease-in-out'>
                  hello@padel.africa
                </div>
              </a>
            </div>
          </div>
        </div>
        <aside id='events' className='bg-gray-50 md:w-2/5 h-fit   space-y-2   '>
          <Form
            className='w-full   my-6 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900   bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-12    h-fit '
            method='post'
            aria-hidden={state === 'success'}
          >
            <fieldset>
              <p className='font-heading text-lg  uppercase mb-4'>
                Send a message
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
                <label htmlFor='message' className='block text-xs '>
                  Your message
                </label>
                <textarea
                  rows={5}
                  name='message'
                  id='message'
                  className='bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500'
                  placeholder='Enter your message here'
                  required
                />
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
            <h2 className='text-2xl font-heading'>
              🚀 Thank you for the message.
            </h2>

            <p>We will review it and get back to you as soon as possible.</p>
            <Link className='underline text-green-300' to='.'>
              Start Over
            </Link>
          </div>
        </aside>
      </section>

      <CTAMail
        heading='Sign up to the Padel Africa newsletter'
        body='Subscribe and ensure to be among the first to find out about all our updates and special offers.'
        buttonText='Contact Us'
        buttonTo='#contact'
      />
    </>
  );
}
