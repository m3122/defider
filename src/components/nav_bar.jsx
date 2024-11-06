import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink to='/' className='nav-bar__logo'> 
      <img src= {logo} alt="Logo" className="nav-bar__logo"/>
      </NavLink>  
      <NavLink
        className={navLinkClass}
        to='/equipos'
      >
        Equipos
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/eventos'
      >
        Eventos   
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/talleres'
      >
        Talleres   
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/gym'
      >
        Gimnasio   
      </NavLink>
      
    </nav>
  )
}
 
export default NavBar
