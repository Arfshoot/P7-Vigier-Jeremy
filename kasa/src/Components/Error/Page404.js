import React from 'react'
import { Link } from "react-router-dom"
import Banner from '../Composants-Style/Banner'
import './Page404.css'



export default function Error () {
  return (
    <div>
        <Banner />
        <div className="all-404">
        <div className="numb-text">
          <span className="numb-404">404</span> <br></br>
          <span className="text-404">Oups ! La page que vous demandez n'existe pas.</span>
        </div>
        <div className="all-link-404">
          <Link className="link-404"
          activeClassName='active'
          to='/'>
            <p>Retouner à la page d'accueil</p>
          </Link>
        </div>
        </div>
    </div>
  )
}
