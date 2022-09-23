import { Link } from 'remix';

export default function moreThanSportIndex() {
  return (
    <section className='w-full md:p-32 py-12 px-3 space-y-12   bg-slate-900 justify-between  '>
      <Link to='game'>Get Started</Link>
    </section>
  );
}
