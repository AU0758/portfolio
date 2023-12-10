import React from 'react';

import Cube from '@/assets/images/cube.png';
import Spere from '@/assets/images/furr_spere.png';

import i from '@/assets/images/i.png';

{/* icons */}
import HTML from '@/assets/icons/HTML.png';

import Image from 'next/image';

const ArtistM = () => {
  return (
    <main>
      <section className='h-[100vh] flex items-center'>
        <div className='absolute spere blur-[200px] w-[633px] h-[633px] rounded-full bg-[#900093] right-[-278px] top-[-106px]'></div>
        <Image src={Spere} alt='3d Model' height={655} width={1276} className='absolute spere right-[-789px] top-[-166px] rotate-[23.134deg] z-10'></Image>
        
        <div className='cube absolute blur-[200px] rotate-[15.7deg] w-[1362px] h-[780.21px] bg-[#900093] left-[-655px] top-[1315px]'></div>
        <Image src={Cube} alt='3d Model' height={868} width={1193} className='cube absolute top-[1493px] left-[-397px] rotate-[1.379deg] z-5 cube'></Image>

        <h2 className='text-[200px] text-white'>Simplicity <b className=' font-normal'>and</b> Eficiency.</h2>
      </section>
      <section className='flex justify-center'>
        <Image src={HTML} alt='html icon' className='absolute top-7 h-7 w-7'></Image>
        <div className='absolute blur-[200px] w-[633px] h-[633px] rounded-full bg-[#900093]'>
        </div>
        <Image src={i} alt='i' height={504.453} width={967.156} className='' />
      </section>
    </main>
  )
}

export default ArtistM