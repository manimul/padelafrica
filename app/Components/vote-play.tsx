import { Link } from 'remix';
import VotePlayButton from './vote-play-button';

export default function VoteGamePlay() {
  const buttonArray: { id: number; name: string; emoji: string }[] = [
    { id: 1, name: 'Love', emoji: '❤️' },
    { id: 2, name: '️Passion', emoji: '✨' },
    { id: 3, name: '️Friendship', emoji: '👐' },
    { id: 4, name: '️Pride', emoji: '🏳️‍🌈' },
    { id: 5, name: '️Fun', emoji: '🤡' },
    { id: 6, name: 'Community', emoji: '🤝' },
    { id: 7, name: '️Fierce', emoji: '💅' },
    { id: 8, name: '️Relaxing', emoji: '😌' },
    { id: 9, name: 'Family', emoji: '👨‍👩‍👦‍👦' },
    { id: 10, name: '️Cool', emoji: '😎' },
    { id: 11, name: '️Incredible', emoji: '🔥' },
    { id: 12, name: '️️Exciting', emoji: '🚀' },
    { id: 13, name: '️️Investment', emoji: '💸' },
    { id: 14, name: 'Crazy', emoji: '🤯' },
    { id: 15, name: 'Social', emoji: '🍻' },
  ];

  return (
    <div className='space-y-12'>
      <h1 className='text-5xl font-heading text-center uppercase'>
        Padel is{' '}
        <span className='text-yellow-500 italic'>more than sport.</span>{' '}
        <br></br>Padel is...
      </h1>
      <div className='grid md:grid-cols-5 grid-cols-3 gap-5'>
        {buttonArray.map((value, key) => {
          return (
            <VotePlayButton
              key={key}
              name={value.name}
              emoji={value.emoji}
            ></VotePlayButton>
          );
        })}
      </div>
    </div>
  );
}
