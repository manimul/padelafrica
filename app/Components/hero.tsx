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

export default function Hero(props: HeroContent) {
  return (
    <section
      style={{ backgroundImage: `url('${heroImg}')` }}
      className='[hero] h-screen   px-6 md:px-24 flex align-middle  bg-cover  bg-green-300  bg-blend-screen	 '
    >
      <div className='md:w-1/2 my-auto space-y-vw-4-min@xl '>
        <h1 className='text-4xl font-bold'>{props.heading}</h1>

        <p className='text-base'>{props.body}</p>
        <div className=' md:space-x-vw-4-min@xl  md:inline-flex justify-between'>
          <button className=' py-4 px-6 bg-gradient-to-br from-green-300   to-yellow-400 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'>
            {props.button1Text}
          </button>
          <button className=' py-4 px-6 bg-gradient-to-br from-white   to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'>
            {props.button2Text}
          </button>
        </div>
      </div>
    </section>
  );
}
