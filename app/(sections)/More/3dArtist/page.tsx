import React from 'react';

import Spere from '@/assets/images/furr_spere.png';
import Image from 'next/image';

const ArtistM = () => {
  return (
    <main>
      <div className='absolute spere blur-[200px] w-[633px] h-[633px] rounded-full bg-[#900093] right-[-278px] top-[-106px] rotate-[23.134deg]'></div>
      <Image src={Spere} alt='3d Model' height={655} width={1276} className='absolute spere right-[-789px] top-[-166px] rotate-[23.134deg] z-10'></Image>

      <section className='h-[100vh] flex items-center'>
        <h2 className='text-[200px] text-white'>Simplicity <b className=' font-normal'>and</b> Eficiency.</h2>
      </section>
    </main>
  )
}

export default ArtistM