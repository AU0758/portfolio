'use client'

import Image from 'next/image';
import React, { useState } from 'react';

import Cube from '@/assets/images/cube.png'
import Spere from '@/assets/images/furr_spere.png'
import Lines from '@/assets/images/Abstract_Line.png'

export default function App() {
  const [index, setIndex] = useState(3  );

  return (
  <main className='flex h-[100vh] items-center justify-center overflow-hidden'>
    {Array(
      <div className='webdev'>
          <p className='absolute webdev vertical-text orbitron top-0 left-[15ch] text-[20px] text-[#009317]'>0101010101001011001010</p>
          <div className='absolute webdev vertical-text orbitron top-0 w-[633px] h-[633px] rounded-full left-[15ch] bg-[#009317] blur-[250px]'/>
          <p className='absolute webdev vertical-text orbitron top-0 left-[16ch] text-[20px] text-[#009317]'>11010101011101010101001</p>
          <p className='absolute webdev vertical-text orbitron top-0 left-[18ch] text-[20px] text-[#009317]'>11110100010101010101</p>
          <p className='absolute webdev vertical-text orbitron top-0 right-0 text-[20px] text-[#009317]'>100000001101001010110010</p>
          <p className='absolute webdev vertical-text orbitron top-0 right-[1ch] text-[20px] text-[#009317]'>1010001001001011001010</p>
          <p className='absolute webdev vertical-text orbitron top-0 right-[12ch] text-[20px] text-[#009317]'>1010001001001011001010</p>
          <p className='absolute webdev vertical-text orbitron top-0 right-[13ch] text-[20px] text-[#009317]'>11010101011010010101</p>
      </div>,
      <div className='z-20'>
        <div className='cube absolute blur-[200px] rotate-[-13.451deg] w-[1362px] h-[780.21px] bg-[#900093] left-[-255px] top-[-517px]'></div>
        <Image src={Cube} alt='3d Model' height={868} width={1193} className='cube absolute top-[50px] left-[-397px] rotate-[1.379deg] z-5 cube'></Image>
        <div className='absolute spere blur-[200px] rotate-[-13.451deg] w-[663px] h-[663px] rounded-full bg-[#900093] right-[-180px] bottom-[-174px]'></div>
        <Image src={Spere} alt='3d Model' height={655} width={1276} className='absolute spere  bottom-[-291px] right-[-577px] rotate-[1.379deg] z-10'></Image>
      </div>,
      <div className='z-0'>
        <Image src={Lines} alt='Abstract Lines' height={3087.78} width={3078.73} className='design absolute left-[-627px] top-1 rotate-[-132.236deg] z-0'></Image>
        <div className='absolute bottom-0 right-0'>
          <div className='flex justify-end'>
            <div className='w-[250px] h-[250px] bg-[#005AAD] blur-md'></div>
          </div>
          <div className='flex'>
            <div className='w-[250px] h-[250px] bg-[#359EFF] blur-md'></div>
            <div className='w-[250px] h-[250px] bg-[#0085FF]'></div>
          </div>
        </div>
      </div>,
      <div>
        <p className='absolute top-[60%] left-[-50%]'>IDONTKNOW</p>
        <p className='absolute top-[20%] right-[-50%]'>IDONTKNOW</p>
      </div>,
      <div>
        
      </div>,
    )[index]}

    <div className='text-center z-10'>
      <h2 className='sticky top-12'>The</h2>
      {Array(
      <h1 className='sm:text-[50px] md:text-[100px] lg:text-[300px] title'  onClick={(e) => {setIndex((index+1) % 5)}} >WEBDEV</h1>,
      <h1 className='sm:text-[50px] md:text-[100px] lg:text-[300px] title' onClick={(e) => {setIndex((index+1) % 5)}} >3D ARTIST</h1>,
      <h1 className=' title' onClick={(e) => {setIndex((index+1) % 5)}} >DESIGNER</h1>,
      <h1 className='copywriter copywriter_title sm:text-[50px] md:text-[100px] lg:text-[262.5px] title' onClick={(e) => {setIndex((index+1) % 5)}} >COPYWRITER</h1>, 
      <h1 className='sm:text-[50px] md:text-[100px] lg:text-[300px] title'  onClick={(e) => {setIndex((index+1) % 5)}} >000</h1>)[index]}

      <h2 className='sticky bottom-12'>You want</h2>
    </div>
  </main>
  );
}
