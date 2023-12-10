'use client';

import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import Link from 'next/link';


const TrailL: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 20 : 0,
    height: open ? 10 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className='text-[#D9D9D9] after:content-[""] after:h-[2px] after:w-[0%] after:bg-[#D9D9D9] after:inline-block after:transition-all hover:after:w-[100%]' style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}
const TrailR: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? -20 : 20,
    height: open ? 10 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className='text-[#D9D9D9] after:content-[""] after:h-[2px] after:w-[0%] after:bg-[#D9D9D9] after:inline-block after:transition-all hover:after:w-[100%]' style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [contact, setContact] = useState(true)
  const [more, setMore] = useState(true)

  return (
    <div className='absolute w-[100vw] flex top-0 justify-between p-[50px] z-30'>
        <div>
          <h3 onClick={() => setContact(state => !state)} className='text-white w-[7ch] font-bold text-[50px]'>Contact</h3>
          <TrailL open={contact}>
            <Link href='/contact/WebDev' className='nav_c'>Web Developer</Link>
            <Link href='/contact/3dArtist' className='nav_c'>3d Artist</Link>
            <Link href='/contact/Design' className='nav_c'>Designer</Link>
            <Link href='/contact/Copywriting' className='nav_c'>Copywriter</Link>
          </TrailL>
        </div>
        <h3 className='text-white font-bold text-[50px]'><Link href='/'>000</Link></h3>
        <div className='text-right'>
          <h3 onClick={() => setMore(state => !state)} className='text-white w-[7ch] font-bold text-[50px]'>More</h3>
          <TrailR open={more} className=''>
            <Link href='/More/WebDev' className='nav_c'>Web Developer</Link>
            <Link href='/More/3dArtist' className='nav_c'>3d Artist</Link>
            <Link href='/More/Design' className='nav_c'>Designer</Link>
            <Link href='/More/Copywriting' className='nav_c'>Copywriter</Link>
          </TrailR>
        </div>
    </div>
  )
}