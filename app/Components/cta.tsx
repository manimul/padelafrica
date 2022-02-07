import { Link } from 'remix';

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
      className='[cta] p-20 md:mx-20 bg-slate-900 flex flex-col justify-center align-middle rounded-md shadow-2xl text-white'
    >
      <div className='  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4 '>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 '>
          {props.heading}
        </h2>
        <p className='base'>{props.body}</p>
        <Link to={props.buttonTo} className=' inline-flex '>
          <button className='py-4 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 rounded-xl text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'>
            {props.buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
