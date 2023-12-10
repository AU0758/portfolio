import React from 'react'

const CopywriterC = () => {
  return (
    <main className='flex justify-center items-center h-[100vh]'>
        <p className='absolute left-[-50%]'>IDONTKNOW</p>
        <p className='absolute right-[-50%] top-[20%]'>SOMETINGID</p>

        <div className='z-20'>
            <h2 className='text-[100px] text-white'><b className='font-normal'>Who</b> sells <b className='font-normal'>the</b> click.</h2>
            <form action="|" className='w-[100%] h-[100%] flex justify-center items-center'>
                <button type="submit" className='absolute bottom-[calc(186px/4)] text-black p-2 rounded-[15px] bg-white orbitron w-[331px] h-[116px] text-[50px]'>SEND</button>
                <textarea name="" id="" cols={30} rows={10} className=' bg-transparent  h-[427px] p-4 text-white rounded-2xl w-[1000px] border-[2px] focus:outline-none '></textarea>
            </form>
           
        </div>
    </main>
  )
}

export default CopywriterC