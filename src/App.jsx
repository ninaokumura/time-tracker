import React from 'react';
import ProfileImage from './images/image-jeremy.png';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className='bg-very-dark-blue h-screen grid place-items-center p-4'>
      <div className='flex gap-4'>
        <ProfileCard
          src={ProfileImage}
          name='Jeremy Robson'
          alt='A person smiling'
        />
      </div>
    </div>
  );
}

export default App;
