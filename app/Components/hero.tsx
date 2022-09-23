import { ActionFunction, Form, Link, useActionData } from 'remix';
import heroImg from '../images/padel-hero.jpg';
import padelImg from '../images/partners/padeltotal-logo.png';
import padelIq from '../images/partners/padel-iq.png';

interface HeroContent {
  heading: string;
  body: string;
  button1Text: string;
  button1To: string;
  button2Text: string;
  button2To: string;
  imgSrc: string;
}

export default function Hero(props: HeroContent) {
  let actionData = useActionData();
  let state: 'idle' | 'success' | 'error' = actionData?.subscription
    ? 'success'
    : actionData?.error
    ? 'error'
    : 'idle';

  return (
    <>
      <main className='[hero] container mx-auto bg-none pt-16 md:pt-32 md:pb-12 mb-12 md:-mt-16 px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	 '>
        <div className='w-full md:w-2/5 md:my-auto space-y-vw-2-min@xl md:py-16  '>
          <h1 className='text-4xl md:text-6xl font-heading uppercase '>
            Padel has taken Europe by storm.
            <span className='inline md:block md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300'>
              Now it's time to bring it to Africa
            </span>
          </h1>

          <p className='text-base  '>
            👋 Interested in a partnership?
            <a className='underline' href='mailto:hello@padel.africa'>
              {' '}
              Email us
            </a>{' '}
          </p>
        </div>

        <Form
          className='w-full md:w-2/5 my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-25  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit '
          method='post'
          aria-hidden={state === 'success'}
        >
          <fieldset>
            <p className='font-heading text-lg  uppercase'>
              Join the Mailing List
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
          className='w-full md:w-2/5 my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-25  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit '
          //className={ if (state === "sucess")  {'hidden'} else{'block'} }
          aria-hidden={state !== 'success'}
        >
          <h2 className='text-2xl font-heading'>🚀 You're Subscribed!</h2>

          <p>Thank you for signing up to our mailing list</p>
          <Link className='underline text-green-300' to='.'>
            Start Over
          </Link>
        </div>
      </main>

      <section className=' mx-auto w-2/3 rounded-lg md:py-12 py-12 bg-slate-900  mb-12 md:-mt-16 px-8 sm:px-12 flex  flex-col align-middle md:justify-between  md:space-y-6  	'>
        <h2 className='m-auto uppercase text-center font-heading text-xl dark:text-white text-white opacity-70'>
          Our Strategic Partners
        </h2>
        <div className='flex flex-row align-middle justify-center m-auto space-x-8 '>
          <a href='https://padeltotal.se'>
            <img
              className='w-56 h-auto opacity-75 transition ease-in-ou  hover:opacity-100 hover:scale-105 cursor-pointer '
              src={padelImg}
            />
          </a>
          <a href='https://padeliq.io/'>
            <img
              className='w-56 h-auto opacity-75   transition ease-in-out hover:opacity-100 hover:scale-105 cursor-pointer '
              src={padelIq}
            />
          </a>
        </div>
      </section>
    </>
  );
}
