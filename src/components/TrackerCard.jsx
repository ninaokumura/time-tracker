import React from 'react';

export default function TrackerCard(props) {
  return (
    <div className='w-64 h-48 bg-dark-blue rounded-xl'>
      <div>
        <img src={props.src} alt={props.alt} />
        <div className=''>
          <span>{props.title}</span>
          <span>...</span>
          <div>{props.time}</div>
          <span>{props.duration}</span>
        </div>
      </div>
    </div>
  );
}
