import React from 'react'

export default function Header() {
  return (
    <header className='relative pt-8 grid grid-cols-2 items-center gap-8'>

      <div>

        <span className='absolute -z-100 shadow-custom-blur'></span>
        <span className='absolute -z-50 shadow-custom-blur'></span>
        <h1 className='text-white mb-[1rem] text-[3rem] font-bold leading-[3rem]'>Instituto <span className='[webkit-text-fill-color:transparent] [webkit-text-stroke:1px_#fff]'>Superior</span> Del Profesorado De Pascanas</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A doloremque suscipit dignissimos in autem iusto itaque sapiente quo ipsam aliquam fugiat, ducimus dolores aliquid vel dolore quod nemo. Quod, quos?</p>

      </div>

      <div>
        <img src="" alt="" />
      </div>
      
    </header>
  )
}
