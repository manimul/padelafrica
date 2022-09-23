import { Link } from 'remix';

export default function Facts() {
  return (
    <section className='p-12 min-h-screen bg-slate-900 py-32'>
      <div className='grid grid-cols-10  gap-10'>
        <aside className='self-start sticky top-20 col-span-2'>
          <h1 className='text-6xl uppercase font-heading leading-snug'>
            Padel Africa Fact Sheet{' '}
          </h1>
          <ul className=' bg-slate-800 p-4 rounded-md'>
            <li>
              <Link to='#facts-goal'>Goal</Link>
            </li>
            <li>
              <Link to='#facts-africa'>Why Africa?</Link>
            </li>
            <li>
              <Link to='#facts-padel'>Why Padel?</Link>
            </li>
            <li>
              <Link to='#facts-experience'>Experience</Link>
            </li>
            <li>
              <Link to='#facts-activity'>Activity on the ground</Link>
            </li>
            <li>
              <Link to='#facts-partnerships'>Partnerships</Link>
            </li>
            <li>
              <Link to='#facts-process'>Process</Link>
            </li>
          </ul>
        </aside>

        <main className='col-span-8 py-20 space-y-48'>
          <div id='facts-goal' className='grid grid-cols-2 gap-10 min-h-screen'>
            <div className='col-span-1'>
              {' '}
              <h1>Goal</h1>
              <ul>
                <li>
                  We are seeking to raise 20 mio SEK to build our first two
                  complexes in Ghana and Rwanda
                </li>
              </ul>
            </div>
            <div className='col-span-1 bg-white'>hello</div>
          </div>

          <div
            id='facts-africa'
            className='grid grid-cols-2 gap-10 min-h-screen'
          >
            <div className='col-span-1'>
              {' '}
              <h1>Why Africa?</h1>
              <ul>
                <li>
                  <a
                    href='https://www.tradefinanceglobal.com/posts/africa-is-the-future-all-eyes-turn-to-youngest-continent-as-next-frontier-for-growth/'
                    target='_blank'
                    rel='noopener'
                  >
                    &ldquo;Africa is the future&rdquo;
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.axios.com/2018/01/20/africas-growing-middle-class-is-a-source-of-pros-1516452641'
                    target='_blank'
                    rel='noopener'
                  >
                    Growing middle class
                  </a>
                </li>
                <li>
                  World&rsquo;s youngest continent, with a{' '}
                  <a
                    href='https://blogs.worldbank.org/opendata/chart-worlds-youngest-populations-are-africa'
                    target='_blank'
                    rel='noopener'
                  >
                    median age of 20 years and 60 % of the population under the
                    age of 25.
                  </a>
                </li>
                <li>
                  We have a{' '}
                  <a
                    href='https://bambwagroup.com/'
                    target='_blank'
                    rel='noopener'
                  >
                    vested interest in Africa
                  </a>
                  , and in bringing impactful projects to life there.
                </li>
              </ul>
            </div>
            <div className='col-span-1 bg-white'>hello</div>
          </div>

          <div
            id='facts-padel'
            className='grid grid-cols-2 gap-10 min-h-screen'
          >
            <div className='col-span-1'>
              {' '}
              <h1>Why Padel?</h1>
              <ul>
                <li>
                  It&rsquo;s one of the world&rsquo;s fastest growing sports,
                  with over 25 million players in over 90 countries worldwide.
                </li>
                <li>
                  In
                  <a
                    href='https://tenniscreative.com/padel-statistics/'
                    target='_blank'
                    rel='noopener'
                  >
                    {' '}
                    2021 there were over 15,000 new courts registered in Europe,
                  </a>{' '}
                  we believe this demand is transferable to Africa.
                </li>
                <li>
                  It&rsquo;s easy to learn and play, with relatively low
                  barriers to entry, for both providers and players.
                </li>
                <li>
                  As a company that has a mission to create impact
                  <strong>, we believe that padel is more than sport. </strong>
                  What do we mean by this? We mean that padel can serve many
                  different roles in society beyond being simply a game of
                  competitive sport. It can bring people together in new
                  communities and create new opportunities, it can create hope
                  and serve as an outlet for young people.
                  <a
                    href='https://www.africanleadershipmagazine.co.uk/more-than-just-a-game-benefits-of-sports-in-africa/?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=more-than-just-a-game-benefits-of-sports-in-africa'
                    target='_blank'
                    rel='noopener'
                  >
                    {' '}
                    Padel, like many other sports, has the ability to create
                    real impact within a society.
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-span-1 bg-white'>hello</div>
          </div>

          <div
            id='facts-experience'
            className='grid grid-cols-2 gap-10 min-h-screen'
          >
            <div className='col-span-1'>
              {' '}
              <h1>Our Experience</h1>
              <ul>
                <li>
                  In the last 5 years we have built 2200+ courts in 10+
                  countries (of which 800 were built in 2021).
                </li>
                <li>We have our own padel court factory in Spain.</li>
                <li>
                  Our software is used by 150 clubs with +100.000 users as a
                  booking, centre management and customer insights tool. It has
                  been built over the past decade by padel insiders and is
                  specially designed to help businesses develop insights into
                  daily operation, consumer behaviour, and improve utilisation.
                </li>
              </ul>
            </div>
            <div className='col-span-1 bg-white'>hello</div>
          </div>

          <div
            id='facts-activity'
            className='grid grid-cols-2 gap-10 min-h-screen'
          >
            <div className='col-span-1'>
              {' '}
              <h1>Activity on the ground</h1>
              <ul>
                <li>
                  Our company is anchored locally, with offices in Ghana and
                  Kenya. Our local teams provide business development support to
                  new customers.
                </li>
                <li>
                  We have a location scoped for development in Ghana, and a
                  rental space allocated in Rwanda.
                </li>
              </ul>
            </div>
            <div className='col-span-1 bg-white'>hello</div>
          </div>

          <div
            id='facts-partnerships'
            className='grid grid-cols-2 gap-10 min-h-screen'
          >
            <div className='col-span-1'>
              {' '}
              <h1>Partnerships</h1>
              <ul>
                <li>
                  We have partnerships with Scandinavian tour operators who are
                  going to offer Ghana as the next big padel destination. They
                  expect 3,000 nights in Accra during 2023.
                </li>
              </ul>
            </div>
            <div className='col-span-1 bg-white'>hello</div>
          </div>

          <div
            id='facts-process'
            className='grid grid-cols-2 gap-10 min-h-screen'
          >
            <div className='col-span-1'>
              {' '}
              <h1>Process</h1>
              <p>
                Two parallel tracks. We are building a distributor network of
                courts We are using cash flow from above operation and raising
                money to construct complexes
              </p>
            </div>
            <div className='col-span-1 bg-white'>hello</div>
          </div>
        </main>
      </div>
    </section>
  );
}
