import React from 'react';
import { cardsSettings } from '../data/cards-settings';
import { ReactComponent as Dots } from '../images/icon-ellipsis.svg';

export default function TrackerCard(props) {
  const settings = cardsSettings[props.title];
  return (
    <div
      className={`sm:w-64 rounded-xl text-white flex flex-col overflow-hidden`}
    >
      <div
        className={`
        h-20 flex justify-end px-4 -mt-2
        ${settings.className}
      `}
      >
        {settings.image}
      </div>
      <div className='h-48 -mt-8 bg-dark-blue flex-1 rounded-xl p-6 grid gap-4'>
        <div className='flex justify-between'>
          <span className='text-lg font-[500]'>{props.title}</span>
          <span className='p-2 text-lg'>
            <Dots />
          </span>
        </div>

        <div className='flex sm:flex-col sm:justify-start justify-between font-[300] gap-2 relative'>
          <div className='text-2xl sm:text-4xl'>{props.current ?? 0}hrs</div>
          <div className='opacity-[0.5] text-lg flex items-end'>
            Last {props.timeframeUnit} - {props.previous ?? 0}hrs
          </div>
        </div>
      </div>
    </div>
  );
}
