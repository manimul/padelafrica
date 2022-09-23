import { Link } from 'remix';
import Button from './button';

interface CTAContent {
  heading: string;
  body: string;
  buttonText: string;
  buttonTo: string;
}

export default function CTA(props: CTAContent) {
  return (
    <section
      id='partners'
      className='[cta] my-16 p-20 md:mx-20 bg-slate-900  flex flex-col justify-center align-middle rounded-md shadow-2xl text-white'
    >
      <div className='  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4  '>
        <h2 className='text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 '>
          {props.heading}
        </h2>
        <p className='base'>{props.body}</p>

        <Button title={props.buttonText} to={props.buttonTo} />
      </div>
    </section>
  );
}
