import React from 'react'
import './Home.css'
import Banner from '../Composants-Style/Banner'
import montagne from './Images/IMG.png'
import Cart from '../Composants-Style/Cart'
import Footer from '../Composants-Style/Footer'





function Home () {
    return (
        <div>
            
            <Banner />
            
            <div className="container-mont">
                 <img src={montagne} className="Img-mont" alt="fond-montagne"></img>
                 <h1 className='Img-h1'>Chez vous, partout et ailleurs</h1>
            </div>
            <div>
                <Cart />
            </div>
            <div>
                <Footer />
            </div>
        
        
        
        </div>
    )
}

export default Home