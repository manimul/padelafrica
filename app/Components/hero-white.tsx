import { Link } from 'remix';
import heroImg from '../images/padel-hero.jpg';

interface HeroContent {
  heading: string;
  body: string;
  button1Text: string;
  button1To: string;
  button2Text: string;
  button2To: string;
  imgSrc: string;
}

export default function HeroWhite(props: HeroContent) {
  return (
    <section
      className='[hero] min-h-screen    flex  flex-col md:flex-row align-middle justify-between  bg-cover     '
      style={{
        backgroundImage: `linear-gradient(to right, rgba(24, 23, 42, 0.5), rgba(255, 255, 255, 0.23)),url('${heroImg}')`,
      }}
    >
      <div className='w-1/2 h-screen bg-white bg-opacity-10 backdrop-blur-2xl flex'>
        <div className='w-full  my-auto  uppercase   p-24 '>
          <h1 className='text-6xl font-heading text-white  '>
            Padel has taken Europe by storm.&nbsp;<br></br>
            <span className='text-green-500  '>
              Now it's time to bring it to Africa
            </span>
          </h1>

          <p className='text-base font-light text-white'>
            👋 Interested in a partnership?
            <a className='underline' href=''>
              {' '}
              Email us
            </a>{' '}
          </p>
        </div>
      </div>
      <div className='w-1/2 p-32'>
        <form className='w-full  my-auto space-y-vw-4-min@xl bg-white  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit '>
          <p className='font-heading text-lg  uppercase'>
            Join the Mailing List
          </p>
          <div className='mb-6'>
            <label htmlFor='email' className='block  text-xs  '>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              className='bg-gray-50 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Joe Bloggs'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-xs '>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-xs'>
              Your Company
            </label>
            <input
              type='text'
              id='company'
              className='bg-gray-50 border border-gray-300 text-sm   block w-full p-2.5   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Acme Inc'
              required
            />
          </div>

          <button
            type='submit'
            className=' py-4 px-6 bg-gradient-to-br from-green-300 to-yellow-400 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl '
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
