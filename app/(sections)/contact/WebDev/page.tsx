import Image from 'next/image'
import React from 'react'

import Cube from '@/assets/images/cube.png'
import Spere from '@/assets/images/furr_spere.png'

const DesignC = () => {
  return (
    <main className='flex justify-center items-center h-[100vh] overflow-hidden'>
        <p className='absolute webdev vertical-text orbitron bottom-0 left-[9ch] text-[20px] text-[#009317]'>0101010101001011001010</p>
        <div className='absolute webdev vertical-text orbitron bottom-0 w-[633px] h-[633px] rounded-full left-[7ch] bg-[#009317] blur-[250px]'/>
        <p className='absolute webdev vertical-text orbitron bottom-0 left-[1ch] text-[20px] text-[#009317]'>11010101011101010101001</p>
        <p className='absolute webdev vertical-text orbitron bottom-0 left-[2ch] text-[20px] text-[#009317]'>11110100010101010101</p>
        <p className='absolute webdev vertical-text orbitron top-0 right-0 text-[20px] text-[#009317]'>100000001101001010110010</p>
        <p className='absolute webdev vertical-text orbitron top-0 right-[16ch] text-[20px] text-[#009317]'>1101010101010101100110101</p>
        <p className='absolute webdev vertical-text orbitron top-0 right-[18ch] text-[20px] text-[#009317]'>1010001001001011001010</p>
        <p className='absolute webdev vertical-text orbitron top-0 right-[19ch] text-[20px] text-[#009317]'>11010101011010010101</p>
        <div className='absolute webdev vertical-text orbitron top-0 w-[633px] h-[633px] rounded-full right-[8ch] bg-[#009317] blur-[250px]'/>

        <div className='z-20'>
            <h2 className='text-[100px] text-white'><b className='font-normal'>What is realy</b>  Mindblowing.</h2>
            <form action="|" className='w-[100%] h-[100%] flex justify-center items-center'>
                <button type="submit" className='absolute bottom-[calc(186px/4)] text-black p-2 rounded-[15px] bg-white orbitron w-[331px] h-[116px] text-[50px]'>SEND</button>
                <textarea name="" id="" cols={30} rows={10} className=' bg-transparent  h-[427px] p-4 text-white rounded-2xl w-[1000px] border-[2px] focus:outline-none '></textarea>
            </form>
           
        </div>
    </main>
  )
}

export default DesignC