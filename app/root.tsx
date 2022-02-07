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

import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return { title: 'Padel Africa' };
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Nav() {
  return (
    <nav className='[nav] py-4 p-6 md:px-24 flex align-middle justify-between bg-white   '>
      <a href='#' className=' text-2xl '>
        Padel Africa
      </a>
      <ul className='flex space-x-8 my-auto'>
        <Link to='#about'>About</Link>
        <Link to='#partners'>Partners</Link>
        <Link to='#contact'>Investors</Link>
        <Link to='#contact'>Contact</Link>
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <nav className='[nav] p-4 md:p-12 flex flex-col align-middle justify-center text-center bg-white '>
      <a href='#' className='text-2xl '>
        Padel Africa
      </a>
      <ul className='flex justify-center space-x-8 my-auto'>
        <Link to='#about'>About</Link>
        <Link to='#partners'>Partners</Link>
        <Link to='#contact'>Investors</Link>
        <Link to='#contact'>Contact</Link>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <html lang='en'>
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
