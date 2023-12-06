"use client"

import React from 'react';
import HomeTopNav from './home-top-nav';
import HomeSection1 from './home-section-1';
import HomeSection2 from './home-section-2';
import HomeSection3 from './home-section-3';
import HomeSection4 from './home-section-4';
import Link from 'next/link';
import HomeSection5 from './home-section-5';

type Props = {

}

export default function HomeView({ }: Props) {

  return (
    <main className='min-h-screen bg-[#f0f0f3] flex justify-center'>
      <div className='lg:w-2/3 h-full w-11/12 flex flex-col'>
        {/* Top nav */}
        <HomeTopNav />
        <div className=' gap-16 flex flex-col mt-32'>
          {/* apresentação */}
          {/* Section 1 */}
          <HomeSection1 />
          {/* vantagens */}
          {/* section 2 */}
          <HomeSection2 />
          {/* section 3 */}
          <HomeSection3 />
          {/* section 4 */}
          <HomeSection4 />
          {/* Planos */}
          {/* section 5 */}
          <HomeSection5 />
          <div>
          </div>
          {/* vantagem */}
          {/* section 6 */}
          <div>
          </div>
          {/* footer */}
          <div>
          </div>
        </div>
      </div>
    </main>
  )

}