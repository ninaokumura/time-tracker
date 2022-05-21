import React from 'react';
import clsx from 'clsx';

const links = ['Daily', 'Weekly', 'Monthly'];

export default function ProfileCard(props) {
  return (
    <div className='sm:max-w-[16rem] w-full rounded-xl bg-dark-blue overflow-hidden'>
      <div className='sm:p-5 p-8 bg-blue rounded-b-xl sm:min-h-[20rem] gap-6 flex sm:flex-col items-center sm:items-start'>
        <div>
          <img
            src={props.src}
            alt={props.alt}
            className='sm:w-24 sm:h-24 w-20 h-20 border-4 border-white rounded-full'
          />
        </div>
        <div className='text-white font-rubik'>
          <p className='opacity-60'>Report for</p>
          <p className='sm:text-4xl text-2xl font-[300]'>{props.name}</p>
        </div>
      </div>
      <ul className='bg-dark-blue text-white p-4 text-lg gap-2 pb-6 flex sm:flex-col justify-around'>
        {links.map(link => (
          <li
            key={link}
            className={clsx('hover:opacity-100 opacity-60', {
              'opacity-100': props.selectedTimeframe === link.toLowerCase(),
            })}
            role='button'
            onClick={() => props.onTimeframeChange(link.toLowerCase())}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
