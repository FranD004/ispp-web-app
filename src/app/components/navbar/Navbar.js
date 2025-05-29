import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='max-w-auto m-auto pt-1 pb-2 flex items-center justify-between gap-2'>

        <img src='public/images/logo.png' className='max-w-[100px]'/>
        
        <ul className='list-none flex items-center gap-[3rem]'>

          <li className='relative p text-white'>
            <a href='' className="relative pb-3 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1eca1b] after:transition-all after:duration-300 hover:after:w-[70%]">ADMINISTRATIVO</a>
          </li>
          <li className='relative p text-white'>
            <a href='' className="relative pb-3 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1eca1b] after:transition-all after:duration-300 hover:after:w-[70%]">ASISTENCIA</a>
          </li>
          <li className='relative p text-white'>
            <a href='' className="relative pb-3 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1eca1b] after:transition-all after:duration-300 hover:after:w-[70%]">NOTAS</a>
          </li>
          <li className='relative p text-white'>
            <a href='' className="relative pb-3 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1eca1b] after:transition-all after:duration-300 hover:after:w-[70%]">ALUMNOS</a>
          </li>
          <li className='relative p text-white'>
            <a href='' className="relative pb-3 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1eca1b] after:transition-all after:duration-300 hover:after:w-[70%]">DOCENTES</a>
          </li>
          <li className='relative p text-white'>
            <a href='' className="relative pb-3 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1eca1b] after:transition-all after:duration-300 hover:after:w-[70%]">CARRERAS</a>
          </li>
          <li className='relative p text-white'>
            <a href='' className="relative pb-3 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1eca1b] after:transition-all after:duration-300 hover:after:w-[70%]">MATERIAS</a>
          </li>
        
        </ul>
        
        <button className='px-8 py-4 text-[1rem] text-black bg-[#1eca1b] rounded-[5px] pointer-events-auto hover:bg-[#1eca1b]/90 transition-all duration-300'>
            INSCRIBIRME
        </button>

      </nav>
    </>
  )
}
