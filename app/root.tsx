import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  ActionFunction,
  Scripts,
  ScrollRestoration,
} from 'remix';
import heroImg from './images/padel-hero.jpg';
import CookieConsent from 'react-cookie-consent';

import { useState, useEffect } from 'react';
import styles from './styles/tailwind.css';
import appStyles from './styles/app.css';
import logo from './images/logo.svg';
import logoDark from './images/pa-logo-dark.svg';
import logoLight from './images/pa-logo-light.svg';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return { title: 'Padel Africa' };
};

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: appStyles },
  ];
}

export const Nav = (setDarkMode: {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const darkModeToggle = () => {
    //console.log(setDarkMode.setDarkMode);

    setDarkMode.setDarkMode((prev) => !prev);
    //setDarkMode((prev) => !prev);
  };
  const darkMode = true;

  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    //console.log(navbarOpen);

    // console.log(setNavbarOpen);
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      {/*
      <nav
        className={`  ${
          isShrunk
            ? 'transition ease-in-out  md:bg-opacity-75 backdrop-blur-lg z-10 py-2 text-xs    '
            : 'transition ease-in-out md:bg-opacity-0 '
        } bg-slate-900 border-gray-200 px-4 sm:px-12 py-6 md:fixed w-full z-10 text-black `}
      >*/}
      <nav className='bg-none border-gray-200 px-4 sm:px-12 py-6 w-full z-10 text-black   '>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='/' className='flex'>
            <img
              src={logoDark}
              className={`block dark:hidden transition ease-in-out transform ${
                isShrunk ? 'h-16' : 'md:h-16'
              } h-16`}
            />

            <img
              src={logoLight}
              className={`hidden dark:block  transition   ease-in-out transform ${
                isShrunk ? 'h-16' : 'md:h-16'
              } h-16`}
            />
          </a>
          <button
            onClick={handleToggle}
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            {navbarOpen ? (
              <svg
                className=' w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            )}
          </button>
          <div
            className={` ${
              navbarOpen
                ? 'h-screen text-4xl text-center align-middle justify-center'
                : 'hidden'
            } w-full md:block md:w-auto`}
            id='mobile-menu'
          >
            <ul className='flex flex-col  mt-12 md:mt-0   md:flex-row md:space-x-8   text-slate-900 dark:text-white'>
              <li>
                <Link to='/'>Home </Link>
              </li>
              <li>
                <Link to='/join-us'>Join Us </Link>
              </li>
              <li>
                <a href='https://www.facebook.com/padel.africa' className=''>
                  <svg
                    className={` ${navbarOpen ? 'hidden' : 'w-7 h-7'} `}
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
                  <span
                    className={` ${
                      navbarOpen
                        ? 'h-screen text-4xl text-center align-middle justify-center'
                        : 'hidden'
                    } `}
                  >
                    Facebook
                  </span>
                </a>
              </li>

              <li>
                {' '}
                <a href='https://www.instagram.com/padel.africa/' className=''>
                  <svg
                    className={` ${navbarOpen ? 'hidden' : 'w-7 h-7'} `}
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
                  <span
                    className={` ${
                      navbarOpen
                        ? 'h-screen text-4xl text-center align-middle justify-center'
                        : 'hidden'
                    } `}
                  >
                    Instagram{' '}
                  </span>
                </a>
              </li>
              <button
                id='theme-toggle'
                onClick={darkModeToggle}
                type='button'
                className='text-slate-900 dark:text-white md:hover:bg-gray-100 md:dark:hover:bg-slate-900  rounded-lg text-sm '
              >
                <svg
                  id='theme-toggle-dark-icon'
                  className={` ${
                    navbarOpen ? 'hidden' : 'block dark:hidden w-7 h-7'
                  } `}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
                </svg>
                <svg
                  id='theme-toggle-light-icon'
                  className={` ${
                    navbarOpen ? 'hidden' : 'hidden dark:block w-7 h-7'
                  } `}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span
                  className={` ${
                    navbarOpen
                      ? 'h-screen text-4xl text-center align-middle justify-center'
                      : 'hidden'
                  } `}
                >
                  Toggle Dark Mode
                </span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export function Footer() {
  return (
    <footer className='p-4  sm:p-8  bg-white dark:bg-slate-900 dark:bg-opacity-75 bg-opacity-25 text-slate-900 dark:text-white'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm sm:text-center '>
          © 2022{' '}
          <a href='#' target='_blank' className='hover:underline'>
            Padel Africa™
          </a>
          . All Rights Reserved.
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <a href='#' className=''>
            Terms & Conditions
          </a>
          <a href='#' className=' '>
            Privacy Policy
          </a>
          <a href='#' className=''>
            Investors
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang='en' className={` ${darkMode ? '' : 'dark'} scroll-smooth`}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <script></script>
        <Meta />
        <Links />
      </head>
      <body
        style={{
          backgroundImage: ` ${
            darkMode
              ? ' linear-gradient(to right, rgba(255, 255, 255,1)'
              : ' linear-gradient(to right, rgba(15, 23, 42,1)'
          }     , rgba(255, 255, 255, 0.1)),url('${heroImg}')`,
        }}
        className='text-slate-900 dark:text-white  bg-cover bg-fixed   '
      >
        <Nav setDarkMode={setDarkMode} />
        <Outlet />
        <Footer />
        <CookieConsent
          location='bottom'
          buttonText='Accept'
          cookieName='padel-africa-cookie'
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '1rem' }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{' '}
        </CookieConsent>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <script></script>
        <Meta />
        <Links />
      </head>
      <body className='text-slate-900 flex h-screen w-full justify-center align-middle m-auto  '>
        <div className='text-4xl m-auto text-center'>
          <p>😳 Oops - Page Not Found</p>
          <Link className='underline text-green-700' to='/'>
            Go Home
          </Link>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
