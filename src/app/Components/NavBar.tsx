"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        to: "/imccalculator",
        title: "Calcular IMC"
    },
    {
        to: "/cdcalculator",
        title: "Calcular calorias diarias"
    },
    {
        to: "/about",
        title: ""
    }
]

const NavBar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4' id="navbar">  
        <Link href={"/#"} >
          <h1 className='text-4xl font-extrabold bg-clip-text text-slate-800'>
              FitCheck
          </h1>
        </Link>
        <div className='mobile-menu block md:hidden'>
            {!navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800'>
                    <Bars3Icon className='h-5 w-5'/>
                </button>
            ):(
                <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800'>
                    <XMarkIcon className='h-5 w-5'/>
                </button>
            )}
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} title={link.title}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : ""}
    </nav>
  )
}

export default NavBar