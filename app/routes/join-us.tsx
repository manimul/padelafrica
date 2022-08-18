import { ActionFunction, Form, useActionData, Link } from 'remix';

import CTA from '~/Components/cta';
import Hero from '~/Components/campaign-hero';
import BgImg from '~/images/web-bg.jpg';

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
        className='text-slate-900 -mt-32 dark:text-white  md:bg-fixed md:bg-center bg-[center_right_-17rem]  bg-cover   '
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
          <h1 className='text-5xl  font-heading  '>Join Padel Africa</h1>
          <div className='space-y-2 '>
            <p>
              So, what happens when the fastest growing sport meets the fastest
              growing continent? Incredible, exciting, life changing things. Of
              course. Especially If you are one of the canny people sharp enough
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
              to audiences across online and across Denmark and Sweden (see
              dates and locations on this page).
              <h3 className='font-bold mt-4 '>
                We would like you to join us to learn:
              </h3>{' '}
              <ul className=' list-disc list-inside'>
                <li>Why are we committed to bringing padel to Africa.</li>
                <li>Who are the team behind Padel Africa.</li>
                <li>What makes us so capable of succeeding. </li>
                <li> How, and why you can join us.</li>
              </ul>
            </p>
          </div>
        </div>
        <aside className='bg-gray-50 md:w-2/5 h-fit   space-y-2  '>
          <div className='p-8'>
            <h2 className='text-2xl font-heading pb-4'>Upcoming events</h2>
            <ul className='space-y-3 text-xs '>
              <li>
                <strong>Kickoff Zoom Online </strong> - 23rd August -
                16.00-17.00 CEST -
                <a
                  className='underline font-bold text-green-800'
                  href='https://www.eventbrite.com/e/when-the-fastest-growing-sport-meets-the-fastest-growing-continent-tickets-400567747917'
                >
                  Eventbrite Registration
                </a>
              </li>
              <hr className=''></hr>
              <h3 className='font-bold  text-md'>
                Local events planned between 23rd Aug and 9th Sep
              </h3>
              <p className='italic'>Register your interest in the form below</p>
              <li>
                <strong>Stockholm </strong> - date and time TBC
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
            className='w-full   my-6 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900   bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit '
            method='post'
            aria-hidden={state === 'success'}
          >
            <fieldset>
              <p className='font-heading text-lg  uppercase'>
                Register for a local event
              </p>
              <div className='mb-6'>
                <label htmlFor='name' className='block  text-xs   '>
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 dark:text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                  Your Company
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  className='bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Acme Inc'
                  required
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='company' className='block text-xs '>
                  Location
                </label>
                <select
                  id='event'
                  name='event'
                  className='bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                >
                  <option value='stockholm'>Stockholm</option>
                  <option value='gothenburg'>Gothenburg</option>
                  <option value='malmo'>Malmö</option>
                  <option value='helsingborg'>Helsingborg</option>
                  <option value='jonkoping'>Jönköping</option>
                  <option value='copenhagen'>Copenhagen</option>
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
            <h2 className='text-2xl font-heading'>🚀 You're Registered!</h2>

            <p>
              Thanks for registering for this event, you will be sent an email
              with more information.
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
