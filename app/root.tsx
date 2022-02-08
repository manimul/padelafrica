import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import styles from './styles/tailwind.css';
import logo from './images/logo.svg';
import logoDark from './images/logo-dark.svg';
import logoLight from './images/logo-light.svg';

import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return { title: 'Padel Africa' };
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Nav() {
  return (
    <>
      <nav className='bg-slate-900 md:bg-opacity-0 border-gray-200 px-4 sm:px-6 py-4 text-black md:fixed w-full z-10'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='#' className='flex'>
            <img src={logoLight} className='h-16' />
          </a>
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
            <ul className='flex flex-col  md:flex-row md:space-x-8   text-white'>
              <li>
                <Link
                  to='#about'
                  className='block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  '
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='#partners'
                  className='block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  '
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to='#contact'
                  className='block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  '
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  to='#contact'
                  className='block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  '
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className='p-4  sm:p-8 bg-slate-900'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <a href='#' target='_blank' className='flex items-center'>
            <img src={logoLight} className='mr-4 h-20' alt='FlowBite Logo' />
          </a>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
          <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Resources
            </h3>
            <ul>
              <li className='mb-4'>
                <a
                  href='https://flowbite.com'
                  target='_blank'
                  className='text-gray-600 hover:underline dark:text-gray-400'
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href='#'
                  target='_blank'
                  rel='nofollow'
                  className='text-gray-600 hover:underline dark:text-gray-400'
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Follow us
            </h3>
            <ul>
              <li className='mb-4'>
                <a
                  href='#'
                  target='_blank'
                  className='text-gray-600 hover:underline dark:text-gray-400'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='#'
                  target='_blank'
                  className='text-gray-600 hover:underline dark:text-gray-400'
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Legal
            </h3>
            <ul>
              <li className='mb-4'>
                <a
                  href='#'
                  target='_blank'
                  className='text-gray-600 hover:underline dark:text-gray-400'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  target='_blank'
                  className='text-gray-600 hover:underline dark:text-gray-400'
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2022{' '}
          <a
            href='https://flowbite.com'
            target='_blank'
            className='hover:underline'
          >
            Padel Africa™
          </a>
          . All Rights Reserved.
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <a
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
          >
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                clipRule='evenodd'
              />
            </svg>
          </a>
          <a
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
          >
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                clipRule='evenodd'
              />
            </svg>
          </a>
          <a
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
          >
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='text-slate-900'>
        <Nav />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
