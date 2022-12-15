import React from 'react'
import { NavLink } from "react-router-dom";
import './Banner.css'
import Logo from './../../images/Kasa.png'



export default function Banner() {
  return (
    <div className="nav">   
            <div>
            <NavLink
              className="li-nav0"
              to="/"
            >
              <img src={Logo} alt="logo-kasa"></img>
            </NavLink>
            </div>

            <div className="liste-nav">
            <NavLink
              className="li-nav"
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              className="li-nav2"
              to="/Apropos"
            >
              A Propos
            </NavLink>
            </div>

    </div>
  )
}
