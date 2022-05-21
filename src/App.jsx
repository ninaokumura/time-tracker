import React, { useState } from 'react';
import ProfileImage from './images/image-jeremy.png';
import ProfileCard from './components/ProfileCard';
import TrackerCard from './components/TrackerCard';
import data from './data/data.json';
// import { cardsSettings } from './data/cards-settings';

const timeframeUnits = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};

function App() {
  const [timeframe, setTimeframe] = useState('daily');

  return (
    <div className='bg-very-dark-blue min-h-screen grid place-items-center p-4'>
      <div className='sm:flex gap-4 grid'>
        <ProfileCard
          selectedTimeframe={timeframe}
          src={ProfileImage}
          name='Jeremy Robson'
          alt='A person smiling'
          onTimeframeChange={newTimeframe => setTimeframe(newTimeframe)}
        />
        <div className='grid sm:grid-cols-3 gap-4'>
          {data.map(item => (
            <TrackerCard
              title={item.title}
              src={item.image}
              current={item.timeframes[timeframe].current}
              previous={item.timeframes[timeframe].previous}
              timeframeUnit={timeframeUnits[timeframe]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
