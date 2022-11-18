import React from 'react'
import Banner from '../Composants-Style/Banner'
import Footer from '../Composants-Style/Footer'
import montagneSnow from './Images/img-snow.png'
import Accordeon from '../Composants-Style/accordeon.js'
import './Apropos.css'







export default function Apropos() {
  return (
    <div>
        <Banner />
        <div className="container-snow">
                 <img src={montagneSnow} className="Img-snow" alt="fond-montagne"></img>
                 
            </div>
            <div className='accordeon-placement'>
            <Accordeon />
            </div>

        <div>
          <Footer />
        </div>
    </div>
  )
}
