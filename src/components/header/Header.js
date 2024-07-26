import React from 'react'

function Header() {
  return (
    <>
    <header>
      <nav className='flex justify-evenly bg-slate-700 p-5 gap-36'>
        <div className=''>
          <span>Anki</span>
          <span className='text-green-400 text-xl'>T</span>
        </div>

        <div className='flex gap-10 ' >
          <span><a href='#' >About me</a></span>
          <span><a href='#' >Education</a></span>
          <span><a href='#' >Project</a></span>
          <span><a href='#' >Contact</a></span>
        </div>
        <div>
            <span>button</span>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header