import React from 'react'
import { pageLinks,socialLinks } from '../../data'

const Footer = () => {
  return (
    <div>
    <footer className="section footer">
      <ul className="footer-links">
      {pageLinks.map((link)=>{
        const {id,href,text}=link
        return (
        <li key={link.id}>
          <a href={link.href} className="footer-link">{link.text}</a>
        </li>)
      })}
      </ul>


      <ul className="footer-icons">

        {socialLinks.map((link)=>{
          const{id,href,icon}=link
          return(
            <li key={id}>
          <a href={link.href} target="_blank" rel='noreferrer' className="footer-icon"
            ><i className={link.icons}></i
          ></a>
        </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; WayFinder Ltd. Company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    </div>
  )
}

export default Footer