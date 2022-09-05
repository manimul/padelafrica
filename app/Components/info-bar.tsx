import { Link } from 'remix';

export default function InfoBar() {
  return (
    <div className='h-auto flex-row bg-gradient-to-r from-green-500 to-yellow-500 text-slate-900 p-3 text-center'>
      👋 Hey! We are doing some presentation roadshows around Sweden and
      Denmark. Why don't you&nbsp;
      <Link className='underline bold' to='/join-us'>
        join us.
      </Link>
    </div>
  );
}
