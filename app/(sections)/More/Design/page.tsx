import Image from 'next/image'
import React from 'react'

import Lines from '@/assets/images/Abstract_Line.png'

const DesignM = () => {
  return (
    <main className='flex-col justify-center items-center overflow-hidden'>
        <Image src={Lines} alt='Abstract Lines' height={6175.56} width={6157.46} className='design absolute left-[-627px] h-[1870px] w-[3150px] top-1 z-0'></Image>
        <div className='absolute top-0 right-0 rotate-[-90deg]'>
          <div className='flex justify-end'>
            <div className='w-[250px] h-[250px] bg-[#005AAD] blur-md'></div>
          </div>
          <div className='flex'>
            <div className='w-[250px] h-[250px] bg-[#359EFF] blur-md'></div>
            <div className='w-[250px] h-[250px] bg-[#0085FF]'></div>
          </div>
        </div>

        <section className='flex justify-center items-center h-[100vh] overflow-hidden'>
            <h2 className='text-[200px] w-[10ch] text-white'><b className='font-normal'>What makes you</b> buy.</h2>
           
        </section>
        <section className='h-[100vh]'>
            <div className='absolute blur-[200px] w-[633px] h-[633px] rounded-full bg-[#005AAD]'>
            </div>
        </section>
    </main>
  )
}

export default DesignM