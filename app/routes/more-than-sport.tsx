import VoteGame from '~/Components/vote';
import { Link, Outlet } from 'remix';

export default function moreThanSport() {
  return (
    <section className='w-full  md:px-32 py-24 px-3 space-y-12   bg-slate-900 justify-between  '>
      <Outlet />
    </section>
  );
}
