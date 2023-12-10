import Image from 'next/image'
import React from 'react'

import Lines from '@/assets/images/Abstract_Line.png'

const DesignC = () => {
  return (
    <main className='flex justify-center items-center h-[100vh] overflow-hidden'>
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

        <div className='z-20'>
            <h2 className='text-[100px] text-white'><b className='font-normal'>What makes you</b> buy.</h2>
            <form action="|" className='w-[100%] h-[100%] flex justify-center items-center'>
                <button type="submit" className='absolute bottom-[calc(186px/4)] text-black p-2 rounded-[15px] bg-white orbitron w-[331px] h-[116px] text-[50px]'>SEND</button>
                <textarea name="" id="" cols={30} rows={10} className=' bg-transparent  h-[427px] p-4 text-white rounded-2xl w-[1000px] border-[2px] focus:outline-none '></textarea>
            </form>
           
        </div>
    </main>
  )
}

export default DesignC