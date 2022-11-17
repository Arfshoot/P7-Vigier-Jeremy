import React from 'react'
import { Link } from "react-router-dom";
import Logo from './images/Kasa-foot.png'
import './Footer.css'

export default function Footer() {
  return (
     
    <div className='foot'>
    <Link
      className="li-foot"
      activeClassName="active"
      to="/">
      <img src={Logo} alt="logo-kasa"></img>
      <p className='text-foot'>© 2020 Kasa. All rights reserved</p>
    </Link>
    </div>
  )
}
