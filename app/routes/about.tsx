import CTA from '~/Components/cta';

export default function About() {
  return (
    <>
      <section className='w-full md:p-32 py-12 px-3 space-y-12  flex md:flex-row flex-col bg-white justify-between text-black '>
        <div className='md:w-1/2 px-12 space-y-4'>
          <h1 className='text-5xl  font-heading  '>About Padel Africa</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            tellus tempus, condimentum libero vitae, tempor risus. Donec ac
            mattis lacus. Nam non lectus mauris. Fusce ut tortor quis ante
            blandit sagittis. Curabitur finibus tristique nulla. Praesent eget
            risus at mauris tristique auctor id laoreet ante. Mauris fermentum
            placerat malesuada. Nam malesuada venenatis leo, dictum sollicitudin
            erat. Pellentesque ut tincidunt augue. Proin vel nunc orci. Nulla
            nec enim eget enim ornare congue ac eget massa. Vivamus sit amet
            sapien vel nulla scelerisque feugiat. In vel dolor a felis ultricies
            laoreet in sit amet tellus. Integer maximus elit neque, eget varius
            ligula sodales non. Sed iaculis risus et lacus pretium euismod a
            dictum tortor. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Maecenas eget quam ligula.
            Curabitur lacus elit, lobortis at nulla non, fermentum hendrerit
            mauris. Vivamus commodo eleifend lorem, consectetur sollicitudin
            orci convallis vitae. Nunc consectetur placerat mauris, id facilisis
            augue mattis id. Nulla tincidunt ullamcorper euismod. Praesent
            posuere efficitur est sed rutrum. Donec ornare libero at ex
            elementum sodales. Vestibulum in cursus ex. Duis libero dolor,
            dignissim quis placerat ac, sagittis id est. Curabitur sagittis
            velit mauris, id ultrices nisl tincidunt sit amet. Sed suscipit,
            sapien in bibendum malesuada, tellus neque fermentum enim, ut tempus
            tortor est sit amet ante. Ut eget arcu malesuada, lobortis nibh et,
            fringilla tortor.
          </p>
        </div>
        <img className='bg-gray-50 md:w-2/5 h-64 '></img>
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
