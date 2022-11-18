import React from 'react'
import Banner from '../Composants-Style/Banner'
import Footer from '../Composants-Style/Footer'
import logements from '../../logement.json'
import { Link, useParams,} from "react-router-dom";
import './Logement.css'
import Logo from './Images/imagelogement.png'
import { useState } from 'react'





const Logement = () => {
  const {logementId} = useParams()
  const logement = logements.find((logement) => logements.id === logementId)
  const { title, cover, pictures, description, host, name, picture, rating, location, equipement, tags } = logement

  return (
    <section>
      <div>
        <Banner />
      </div>
      <div>
        <img src={cover} alt="cover-product" className="loge-img"></img>
      </div>
      <div className="loge-place">
        <div className="loge-nom">
        <h2 >{title}</h2>
        <p>{location}</p>
        </div>
        <div className="loge-aut">
          <p>{host.name}<br></br></p>
          <img src={host.picture}></img>
        </div>

      </div>
      <div className="tags-place">
        <div>
          <p>{tags[0]}</p>  

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>

  )
}



export default Logement