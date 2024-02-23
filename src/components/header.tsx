import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import logo from '../images/logo-80.png'

const Header = () => {
  return (
    <header className='bg-slate-800 text-gray-100'>
      <div className='container mx-auto p-5 flex flex-col items-center gap-3 md:flex-row'>
        <Link className='flex title-font flex-row items-center gap-3' to="/">
          <img src={logo} alt="Logo Mon Petit Couvreur" />
          <h1 className='text-2xl font-bold'>Mon Petit Couvreur</h1>
        </Link>
        
        <nav className='flex flex-wrap items-center text-sm md:ml-auto md:text-base gap-3'>
          <Link className='hover:text-gray-500' to='/'>Home</Link>
          <Link className='hover:text-gray-500' to='/about'>About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header