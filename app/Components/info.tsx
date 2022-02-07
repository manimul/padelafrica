import infoImg from '../images/about-pa.jpg';

interface InfoContent {
  title: string;
  body: string;
  flow: string;
  image: string;
}

export default function Info(props: InfoContent) {
  return (
    <section
      id='about'
      className={`[cta]  p-vw-32  space-y-10 md:space-x-10 flex flex-col md:flex-row ${
        props.flow == 'left' ? '' : ' md:flex-row-reverse space-x-reverse'
      } `}
    >
      <div className='md:w-1/2 space-y-4  '>
        <h2 className='text-4xl font-bold'>{props.title}</h2>
        <p className='base'>{props.body}</p>
      </div>
      <figure className='md:w-1/2 bg-slate-300'>
        <img src={infoImg} />
      </figure>
    </section>
  );
}
