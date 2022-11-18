import React from 'react'
import { Link } from "react-router-dom";
import Logements from '../../logement.json'
import './Cart.css'



function Cart() {
    return(
        <div className='Box'>
            {
                Logements.map( logement =>{
                    return(
                        <Link to={`/Logement/${logement.id}`} className="cart" key={logement.id} >
                            <figure className="img-box">
                            <img src={logement.cover}  alt='img-logment' className="img"></img>
                            <figcaption className='text-box'> 
                            <p >{logement.title}</p> </figcaption>
                            </figure>
                        </Link>
                    )
                })            }
        </div>
    )
}

 
export default Cart
    

