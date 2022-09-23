interface resultsContent {
  name: string;
  emoji: string;
}

import { Link, useParams, Form, useActionData } from '@remix-run/react';
import { ActionFunction } from 'remix';

export default function VoteGameResults(props: resultsContent) {
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
    <div className='text-center space-y-8'>
      <aside>
        <div className=' space-y-8' aria-hidden={state === 'success'}>
          <h1 className='text-5xl uppercase font-heading'>🥳 Super!</h1>
          <p className='text-5xl uppercase font-heading'>
            You think padel is{' '}
            <span className='text-yellow-500 italic'>more than sport.</span>
            <br></br> You Think Padel is{' '}
            <span className='text-yellow-500 italic'>{id}</span>
          </p>
          <p className='text-5xl uppercase font-heading'>🙌 Great choice! </p>
        </div>
      </aside>
      <aside>
        <Form
          className='   text-slate-900 m-auto w-1/2  '
          method='post'
          aria-hidden={state === 'success'}
        >
          <fieldset className='flex '>
            <div className=' flex-grow'>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500'
                placeholder='name@mail.com'
                required
              />
            </div>
            <div className=' hidden'>
              <input
                type='text'
                name='vote'
                id='vote'
                className='bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500'
                placeholder={id}
                value={id}
                required
              />
            </div>

            <button
              type='submit'
              className='  px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl '
            >
              Submit
            </button>
          </fieldset>
          <p>{actionData?.error ? actionData.message : <> &nbsp; </>}</p>
        </Form>
        <div
          className='w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl p-6    h-fit '
          //className={ if (state === "sucess")  {'hidden'} else{'block'} }
          aria-hidden={state !== 'success'}
        >
          <h2 className='text-5xl uppercase font-heading'>
            🚀 You're now entered into the competition!
          </h2>

          <p className='text-4xl uppercase font-heading'>
            Keep following us to stay in the loop!
          </p>
        </div>

        <Link className='underline' to='/more-than-sport/game'>
          Restart
        </Link>
      </aside>
    </div>
  );
}
