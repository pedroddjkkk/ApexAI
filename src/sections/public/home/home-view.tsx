"use client"

import React from 'react';
import HomeTopNav from '../home-top-nav';
import HomeSection1 from './home-section-1';
import HomeSection2 from './home-section-2';
import HomeSection3 from './home-section-3';
import HomeSection4 from './home-section-4';
import Link from 'next/link';
import HomeSection5 from './home-section-5';
import HomeSection6 from './home-section-6';
import HomeFooter from '../home-footer';
import FloatingButton from '../floating-button';

type Props = {

}

export default function HomeView({ }: Props) {

  return (
    <main className='min-h-screen flex justify-center' style={{
      backgroundImage: "url('https://cdn.discordapp.com/attachments/1083082099994673184/1184651136188289116/Bg-Home.png?ex=658cbf58&is=657a4a58&hm=9969aa3edfc35380e721e3851a7d0bde3788caa208c8130742a8022450f1ab77&')",
      backgroundAttachment: "fixed",
    }}>
      {/* Top nav */}
      <HomeTopNav />
      <div className='lg:w-2/3 h-full w-11/12 flex flex-col'>
        <div className=' gap-16 flex flex-col mt-32'>
          {/* apresentação */}
          {/* Section 1 */}
          <HomeSection1 />
          {/* Planos */}
          {/* section 5 */}
          <HomeSection5 />
          {/* vantagens */}
          {/* section 2 */}
          <HomeSection2 />
          {/* section 3 */}
          <HomeSection3 />
          {/* section 4 */}
          <HomeSection4 />
          {/* vantagem */}
          {/* section 6 */}
          <HomeSection6 />
        </div>
        {/* footer */}
        <HomeFooter />
      </div>
      <FloatingButton />
    </main>
  )

}