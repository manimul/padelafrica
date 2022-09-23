import { ActionFunction, Form, Link, useActionData } from 'remix';
import heroImg from '../images/padel-hero.jpg';
import padelImg from '../images/partners/padeltotal-logo.png';
import padelIq from '../images/partners/padel-iq.png';
import Button from './button';

interface HeroContent {
  heading: string;
  subtitle: string;
  button1Text: string;
  button1To: string;
  imgSrc: string;
}

export default function HeroMain(props: HeroContent) {
  return (
    <>
      <main
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42,1),rgba(255, 255, 255, 0.1)), url('${props.imgSrc}')`,
        }}
        className={`bg-[url(${props.imgSrc})] [hero]    mx-auto  pt-16  pb-12    px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	`}
      >
        <div className='mx-auto md:max-w-5xl text-center  md:my-auto space-y-vw-2-min@xl md:py-16 md:px-12  '>
          <h1 className='text-4xl md:text-6xl font-heading uppercase text-white '>
            {' '}
            {props.heading}
          </h1>

          <p className='text-xs text-white  uppercase opacity-75 tracking-tight '>
            {props.subtitle}
          </p>
          {props.button1Text ? (
            <Button title={props.button1Text} to={props.button1To} />
          ) : (
            ''
          )}
        </div>
      </main>
    </>
  );
}
