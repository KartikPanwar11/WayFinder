import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src='./images/logo.png' className="nav-logo" alt="wayfinder-logo" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
        {pageLinks.map((link)=>{
          return <li key={link.id}>
            <a href={link.href} className="nav-link">{link.text}</a>
          </li>
        })} 
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link)=>{
            const{id,href,icons}=link
            return(
              <li>
              <a href={link.href} 
              target="_blank"
              rel='noreferrer'
              className="nav-icon"> 
              <i className={link.icons}></i></a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Nav