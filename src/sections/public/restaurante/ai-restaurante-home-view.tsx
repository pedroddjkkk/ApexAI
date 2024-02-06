"use client"

import React from 'react';
import HomeTopNav from '../home-top-nav';
import Link from 'next/link';
import HomeFooter from '../home-footer';
import RestauranteSection1 from './ai-restaurante-home-section-1';
import RestauranteSection2 from './ai-restaurante-home-section-2';
import RestauranteHomeSection5 from './ai-restaurante-home-section-5';

type Props = {}

export default function AiRestauranteHomeView({ }: Props) {

  return (
    <main className='min-h-screen flex justify-center' style={{
      backgroundImage: "url('https://cdn.discordapp.com/attachments/1083082099994673184/1184651136188289116/Bg-Home.png?ex=658cbf58&is=657a4a58&hm=9969aa3edfc35380e721e3851a7d0bde3788caa208c8130742a8022450f1ab77&')",
      backgroundAttachment: "fixed",
    }}>
      {/* Top nav */}
      <HomeTopNav />
      <div className='lg:w-2/3 h-full w-11/12 flex flex-col'>
        <div className=' gap-16 flex flex-col mt-32 min-h-screen'>
          <RestauranteSection1 />
          <RestauranteHomeSection5 />
          <RestauranteSection2 />
        </div>
        <HomeFooter />
      </div>
    </main>
  )

}