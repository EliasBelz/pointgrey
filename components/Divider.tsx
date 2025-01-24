import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className='w-max flex flex-row justify-center items-center mx-auto'>
      <hr className="border t-3 border-black mb-1 w-7 block mx-1"/>
      <div className='bg-black size-1 rounded-lg mx-auto mb-1' />
      <hr className="border t-3 border-black mb-1 w-7 block mx-1"/>
    </div>
  );
};

export default Divider;