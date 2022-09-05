import infoImg from '../images/about-pa.jpg';
import { useLoaderData, Link } from 'remix';

import { PortableText } from '@portabletext/react';

interface InfoContent {
  flow: string;
}

export default function Info(props: InfoContent) {
  const { aboutText } = useLoaderData();

  const myPortableTextComponents = {
    types: {
      image: (value: any) => (
        <img src={value.asset} key={value._id} className={value.asset}></img>
      ),
    },
  };

  return (
    <section
      id='about'
      className={`[cta]  p-vw-32  space-y-10 md:space-x-14 flex flex-col md:flex-row ${
        props.flow == 'left' ? '' : ' md:flex-row-reverse space-x-reverse'
      } `}
    >
      <div className='md:w-2/5  space-y-4  '>
        <h2 className='text-5xl font-heading'>{aboutText[0].title}</h2>
        <div className='main-content space-y-2 text-md'>
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
          <Link className='block mt-6 underline text-green-500 ' to='/about'>
            Learn More About Us{' '}
          </Link>
          {/*
          {aboutText[0].overview?.length > 0
            ? aboutText[0].overview.map((paragraphs: any) => (
                <PortableText
                  key={paragraphs._id}
                  value={[paragraphs]}
                  components={myPortableTextComponents}
                />
              ))
            : null} */}
        </div>
      </div>
      <figure className='md:w-1/2 bg-slate-300'>
        <img className='w-full' src={aboutText[0].featureImage} />
      </figure>
    </section>
  );
}
