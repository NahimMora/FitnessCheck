import React from 'react'
import NavLink from './NavLink';

export interface Link{
    to: string;
    title: string;
}

export interface Links{
    links: Link[]
}

const MenuOverlay = ({links}:Links) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.to} title={link.title}/>
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay