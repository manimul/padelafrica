import { Link, ActionFunction } from 'remix';
import Button from './button';

interface CTAContent {
  heading: string;
  body: string;
  buttonText: string;
  buttonTo: string;
}
import { useParams, Form, useActionData } from '@remix-run/react';

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get('email');

  //process.env.CONVERTKIT_KEY = 'lGf6kOnFOOC-YOikZD_YPw';

  const API_KEY = 'lGf6kOnFOOC-YOikZD_YPw';
  const FORM_ID = '3022054';
  const API = 'https://api.convertkit.com/v3/';

  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: 'post',
    body: JSON.stringify({
      email: email,
      api_key: API_KEY,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  //console.log({ email }, { name }, { company });
  return res.json();
};

export default function CTAMail(props: CTAContent) {
  let actionData = useActionData();
  let state: 'idle' | 'success' | 'error' = actionData?.subscription
    ? 'success'
    : actionData?.error
    ? 'error'
    : 'idle';

  const darkMode = false;

  const params = useParams();
  const id = params.resultId;

  return (
    <section
      id='partners'
      className='[cta] my-16 p-20 md:mx-20 bg-slate-900  flex flex-col justify-center align-middle rounded-md shadow-2xl text-white'
    >
      <aside className='  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4  '>
        <h2 className='text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 '>
          {props.heading}
        </h2>
        <p className='base'>{props.body}</p>

        <Form
          method='post'
          className='sm:gap-4 sm:flex max-w-xl mx-auto mt-8'
          aria-hidden={state === 'success'}
        >
          <div className='sm:flex-1'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email address'
              className='w-full p-3 bg-white border-gray-200 transition dark:bg-slate-800 dark:border-slate-700 dark:text-white  shadow-sm focus:ring focus:outline-none focus:ring-green-400 focus:border-white'
              required
            />
          </div>
          <button
            type='submit'
            className='flex items-center justify-center w-full mt-4 sm:w-auto   sm:mt-0 text-base font-heading text-center py-2 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400  text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'
          >
            <span className='text-sm font-medium'> Sign Up </span>
            <svg
              className='w-5 h-5 ml-3'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </button>
          <p>{actionData?.error ? actionData.message : <> &nbsp; </>}</p>
        </Form>
        <div
          className='w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl p-6    h-fit '
          //className={ if (state === "sucess")  {'hidden'} else{'block'} }
          aria-hidden={state !== 'success'}
        >
          <p className='text-2xl uppercase font-heading'>
            You're now subscribed
          </p>
        </div>
      </aside>
    </section>
  );
}
