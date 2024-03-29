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
  return (
    <>
      <main className='[hero] container mx-auto bg-none md:h-screen md:pt-32 py-44 md:pb-12  md:-mt-16 px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	 '>
        <div className='w-full md:w-3/5 my-auto space-y-vw-2-min@xl md:py-16    '>
          <p className='text-2xl font-heading uppercase'>What happens when</p>
          <h1 className='text-4xl md:text-6xl pb-4 font-heading uppercase '>
            The{' '}
            <span className=' md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300'>
              world's fastest growing sport
            </span>{' '}
            meets the{' '}
            <span className='md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-yellow-300  via-yellow-500 to-slate-900 dark:to-green-300'>
              world's fastest growing continent
            </span>
            ?
          </h1>

          <a
            href='#events'
            className='my-6 
             inline-block text-lg py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl '
          >
            Join us to find out
          </a>
        </div>
      </main>
    </>
  );
}
