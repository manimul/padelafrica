import { Link } from 'remix';

interface ButtonContent {
  name: string;
  emoji: string;
}

export default function VotePlayButton(props: ButtonContent) {
  const resultLink = '/more-than-sport/result/' + props.name + props.emoji;
  return (
    <Link
      to={resultLink}
      className='group  bg-slate-800 p-4 rounded-xl py-8  text-center shadow-xl transform hover:scale-105 hover:bg-slate-900 hover:shadow-2xl hover:text-yellow-400  hover:-translate-y-2 duration-200 ease-in-out '
    >
      <span className='text-2xl block transform group-hover:scale-150 group-hover:rotate-6 duration-200 ease-in-out'>
        {props.emoji}
      </span>
      <span className='md:text-2xl '>{props.name}</span>
    </Link>
  );
}
