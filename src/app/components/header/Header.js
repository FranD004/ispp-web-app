import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='max-w-[1500px] m-auto px-[5rem] py-[2rem] relative pt-[2rem] grid grid-cols-2 items-center gap-8'>

      <div className='p-0 m-0 outline-0 border-0 border-box-border'>

          <span className='absolute -z-100 shadow-2xl shadow-[#12710f]'/>
          <span className='absolute -z-50 blur-[length:1000px] bg-[#12710f]'/>
        <h1 className='text-white mb-[1rem] text-[3rem] font-bold leading-[3rem]'>
          Instituto <span className='[text-transparent] [text-stroke:1px_#fff]'>Superior</span> Del Profesorado De Pascanas
        </h1>
        <p className='mb-[2rem] text-[#ccc]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A doloremque suscipit dignissimos in autem iusto itaque sapiente quo ipsam aliquam fugiat, ducimus dolores aliquid vel dolore quod nemo. Quod, quos?
        </p>

        <button className='px-8 py-4 text-[1rem] text-black bg-[#1eca1b] rounded-[5px] pointer-events-auto hover:bg-[#1eca1b]/90 transition-all duration-300'>
          VER MAS </button>
        
      </div>

      <div>
        <Image 
          src='/images/header.png' 
          alt='Header Image'
          width={600}
          height={300}
        />
      </div>
      
    </header>
  )
}
