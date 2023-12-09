import Link from 'next/link';
import React from 'react'

export interface Props{
    to: string;
    title: string;
}

const NavLink = ({to, title} : Props) => {
  return (
    <Link href={to} className='block py-2 pl-4 pr-4 text-slate-600 sm:text-xl rounded md:p-0 hover:text-slate-900 hover:scale-105'>
      {title}
    </Link>
  )
}

export default NavLink