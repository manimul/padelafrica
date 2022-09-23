import CTA from '~/Components/cta';
import EventImg from '~/images/padel_africa_roadshow.png';
import { Meta, Link } from 'remix';
import MetaImg from '~/images/meta-image.png';

export const meta = () => {
  return {
    title: 'About Padel Africa - Padel, More Than Sport',
    description:
      'Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. We believe that Africa is the next growth centre of the world and that it provides immense opportunities for the few who take the leap and expand to Africa.  ',
    keywords: 'padel, africa, sport, ghana, rwanda, kenya, uganda, community',
    'og:image': `https://www.padel.africa${MetaImg}`,
  };
};

export default function About() {
  return (
    <>
      <section className='w-full md:px-32 md:py-24 py-12 px-3 space-y-12  flex md:flex-row flex-col bg-white justify-between text-black '>
        <div className='md:w-3/5 md:px-12 px-4 space-y-4'>
          <h1 className='text-2xl  font-heading font-black tracking-widest uppercase  '>
            About Padel Africa
          </h1>
          <h2 className='font-heading text-2xl'>Who we are</h2>
          <p>
            We believe that Africa is the next growth centre of the world and
            that it provides immense opportunities for the few who take the leap
            and expand to Africa. On the other hand, we are also very aware that
            in order to succeed in Africa, it requires in-depth understanding of
            the product you would like to offer, and a thorough understanding of
            the market.
          </p>
          <p>
            We are confident that our team has the required prerequisites to
            succeed. We are a conglomerate of padel enthusiasts and business
            profiles. Combined we have started over 100 companies, sold 2000
            courts, worked 20 years with Padel and 30 years of business
            experience from Sub Saharan Africa.
          </p>
          <h2 className='font-heading text-2xl'>Why we do this</h2>
          <p>
            Our purpose in everything we do, is to try and improve quality of
            life.
          </p>
          <p>
            We believe many different offerings can provide the platform to
            improve quality of life, and that it merely comes down to focus,
            creativity and execution as to how much it will be.
          </p>
          <p>
            Many people overlook the African continent when they are looking for
            new markets to expand to. This is a shame, as the impact one can do
            here, supersedes almost anywhere else in the world. Furthermore, the
            continent is often reduced to an unfair generalisation. The
            continent is as diverse as any other.
          </p>
          <p>
            There are though some common denominators among the Africans we have
            met: They have a high focus on family and friends, they love to have
            fun and appreciate if some movement is involved. Besides this, the
            continent is growing rapidly, both in terms of population and
            purchasing power.
          </p>
          <p>
            For those reasons we feel padel and Sub Saharan Africa is a perfect
            match and we will work tirelessly to bring Africa along on this
            global trend.
          </p>
          <h2 className='font-heading text-2xl'>What are we going to do?</h2>
          <p>We are going to bring padel to Sub Saharan Africa.</p>
          <p>
            We are going to act as a court distributor and build our own
            complexes.
          </p>
          <p>
            The main targets for the courts we sell are hotels, resorts,
            compounds and similar. We will provide them with everything they
            need, so they can offer this unique and fun experience to their
            guests and visitors.
          </p>
          <p>
            The complexes we are going to build will have a large focus on
            serving as a community hub. We want people to come, stay and enjoy
            themselves and the company. Padel has the ability to break down
            social barriers and will provide a platform for people to meet each
            other and form friendships and network.
          </p>
          <p>
            We will offer both the courts and the complexes as a turnkey
            solution, to ensure scalability and deployment speed.
          </p>
          <h2 className='font-heading text-2xl'>How are we going to do it?</h2>
          <p>
            We have a focus on involvement, participation and collaboration.
            This is why we are working hard to internalise the partners we
            currently work with, and the future partners of the venture.
          </p>
          <p>
            For this reason we are crowdfunding part of the venture. We want to
            bring on like minded people who share our passion for padel, Africa
            or a combination, on this journey.
          </p>
          <p>
            We are currently selling courts in Africa. This will pave the way
            for the introduction of the sport, create some demand, and also
            create some cash flow to fund the complexes.
          </p>
          <p>
            Within the next quarter we will start constructing our first
            complexes.
          </p>
        </div>
        <Link className='md:w-2/5 h-full ' to='/join-us'>
          <img src={EventImg} className='bg-gray-50 '></img>
        </Link>
      </section>
      <CTA
        heading='Are you interested in partnering with the Number 1 African Padel company?'
        body='At this very early stage in our development we are interested in finding partners from all sectors to investigate partnership possibilities. If this sounds like you - get in touch.'
        buttonText='Contact Us'
        buttonTo='#contact'
      />
    </>
  );
}
