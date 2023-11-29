"use client";
import { Menu, Search } from 'lucide-react';
import React, { use } from 'react';

interface PropTypes {
  onMenu: () => void;
  menu: string | null | undefined;
}

export default function TopNav({ onMenu, menu }: PropTypes) {
  return (
    <>
      <div className='h-[100px] t-0 flex flex-row right-0 items-center justify-between px-8 fixed w-full lg:w-[calc(280vw-280px)] backdrop-blur-sm '></div>
      <div className='h-[100px] t-0 flex flex-row right-0 items-center justify-between px-8 fixed w-full lg:w-[calc(100vw-280px)]'>
        <div className='flex flex-row items-center gap-x-8'>
          <div className='lg:hidden drop-shadow-lg rounded-full w-[50px] h-[50px] bg-white flex items-center justify-center'>
            <Menu size={28} onClick={() => onMenu()} />
          </div>
          <div className='drop-shadow-lg rounded-full w-[50px] h-[50px] bg-white flex items-center justify-center'>
            <Search size={25} />
          </div>
        </div>
        <div className='rounded-full w-[50px] h-[50px] bg-white border-primary-500 border-2 drop-shadow-lg'>
        </div>
      </div>
    </>
  );
}