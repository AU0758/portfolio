import Image from 'next/image'
import React from 'react'

import Cube from '@/assets/images/cube.png'
import Spere from '@/assets/images/furr_spere.png'

const ArtistC = () => {
  return (
    <main className='flex justify-center items-center h-[100vh] overflow-hidden'>
        <div className='cube absolute blur-[200px] w-[1362px] h-[780.21px] bg-[#900093] bottom-[-248px] left-[-489px] rotate-[1.379deg]'></div>
        <Image src={Cube} alt='3d Model' height={868} width={1193} className='cube absolute bottom-[-248px] left-[-489px] rotate-[1.379deg] z-5 cube'></Image>
        <div className='absolute spere blur-[200px] w-[855px] h-[855px] rounded-full bg-[#900093] right-[-504px] rotate-[23.134deg]'></div>
        <Image src={Spere} alt='3d Model' height={655} width={1276} className='absolute spere right-[-704px] rotate-[23.134deg] z-10'></Image>


        <div className='z-20'>
            <h2 className='text-[100px] text-white'>Simplicity <b className=' font-normal'>and</b> Eficiency.</h2>
            <form action="|" className='w-[100%] h-[100%] flex justify-center items-center'>
                <button type="submit" className='absolute bottom-[calc(186px/4)] text-black p-2 rounded-[15px] bg-white orbitron w-[331px] h-[116px] text-[50px]'>SEND</button>
                <textarea name="" id="" cols={30} rows={10} className=' bg-transparent  h-[427px] p-4 text-white rounded-2xl w-[1000px] border-[2px] focus:outline-none '></textarea>
            </form>
           
        </div>
    </main>
  )
}

export default ArtistC