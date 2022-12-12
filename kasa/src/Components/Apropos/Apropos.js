
import { useParams} from "react-router-dom"
import React from 'react'
import Banner from '../Composants-Style/Banner'
import Footer from '../Composants-Style/Footer'
import montagneSnow from './Images/img-snow.png'
import apropos from '../../dataApropos.json'
import Liste from '../Logement/Liste'
import './Apropos.css'



const Apropos = () => {

const apropo = apropos.find((apropo) => apropo)
const {question , answer} = apropo
const {id} = useParams()


  return (
    <div >
        <Banner />
        <div className='apropos-all'>
        <div className="container-snow">
                 <img src={montagneSnow} className="Img-snow" alt="fond-montagne"></img>    
            </div>
            <div className='accordeon-placement'>
            {apropos.map((data) => 
                       <Liste
                  title={data.question}
                  txt={data.answer}
              /> ) }

                
            </div>
        </div>

        <div>
          <Footer />
        </div>
    </div>
  )
}


export default Apropos