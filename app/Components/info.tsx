import infoImg from '../images/about-pa.jpg';
import { useLoaderData } from 'remix';

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
      className={`[cta]  p-vw-32  space-y-10 md:space-x-10 flex flex-col md:flex-row ${
        props.flow == 'left' ? '' : ' md:flex-row-reverse space-x-reverse'
      } `}
    >
      <div className='md:w-1/2 space-y-4  '>
        <h2 className='text-4xl font-bold'>{aboutText[0].title}</h2>
        <div className='main-content space-y-2'>
          {aboutText[0].overview?.length > 0
            ? aboutText[0].overview.map((paragraphs: any) => (
                <PortableText
                  key={paragraphs._id}
                  value={[paragraphs]}
                  components={myPortableTextComponents}
                />
              ))
            : null}
        </div>
      </div>
      <figure className='md:w-1/2 bg-slate-300'>
        <img src={aboutText[0].featureImage} />
      </figure>
    </section>
  );
}
