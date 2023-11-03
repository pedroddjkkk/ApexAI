import { Search } from 'lucide-react';
import React from 'react';

// import { Container } from './styles';

const TopNav: React.FC = () => {
  return (
    <>
      <div className='h-[100px] t-0 flex flex-row right-0 items-center justify-between px-8 fixed w-[calc(100vw-280px)] backdrop-blur-sm '></div>
      <div className='h-[100px] t-0 flex flex-row right-0 items-center justify-between px-8 fixed w-[calc(100vw-280px)]'>
        <Search size={28} />
        <div className='rounded-full w-[50px] h-[50px] bg-zinc-100 border-primary-500 border-2'>
        </div>
      </div>
    </>
  );
}

export default TopNav;