import { Link } from 'remix';

interface ButtonContent {
  title: string;
  to: string;
}

export default function Button(props: ButtonContent) {
  return (
    <Link
      to={props.to}
      className=' inline-flex w-fit items-center  text-base font-heading text-center py-2 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400  text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl'
    >
      {props.title}
      <svg
        aria-hidden='true'
        className='ml-2 -mr-1 w-4 h-4'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
          clipRule='evenodd'
        />
      </svg>
    </Link>
  );
}
