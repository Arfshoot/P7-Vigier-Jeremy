import {useEffect , useState} from 'react'
import Banner from '../Composants-Style/Banner'
import Footer from '../Composants-Style/Footer'
import logements from '../../logement.json'
import { useParams, useNavigate} from "react-router-dom";
import './Logement.css'
import Rating from './Rating.js'
import Slider from './Slide.js'
import Liste from './Liste.js'
import './Liste.css'
import './Slide.css'




const Logement = () => {
  
  const params = useParams();

  const navigate = useNavigate();
  useEffect(() => {
     let logement = logements.find((logement) => params.id === logement.id);
     if (!logement) {
        navigate("/error");
     }
  });

  return (
     <div id="house">
        <div className="house">
          <Banner />
           {logements.filter((logement) => logement.id === params.id).map(
              (logement, index) => (
                 <div key={logement.id - index} className="house__boxes">
   
                    <div className="house__carousel">
                       <Slider data={logement.pictures} />
                    </div>
                    <div className="loge-all">
                       <div className="loge-place">
                          <h2>{logement.title}</h2>
                          <p>{logement.location}</p>
                          <div className="tags">
                             {logement.tags.map((tag, key) => (
                                <div className="tag" key={key}>
                                   {tag}
                                </div>
                             ))}
                          </div>
                       </div>
                       <div className="loge-aut">
                          <div className="loge-aut-place">
                             <p>{logement.host.name}</p>
                             <img
                                src={logement.host.picture}
                                alt="Propriétaire du logement"
                             />
                          </div>
                          <div className='stars'>
                             <Rating rate={logement.rating} />
                          </div>
                       </div>
                    </div>
                    <div className="drop">
                       <div className="drop__down">
                          <Liste
                             title={"Description"}
                             txt={logement.description}
                          />
                       </div>
                       <div className="drop__down">
                          <Liste
                             title={"Équipements"}
                             txtArray={logement.equipments}
                          />
                       </div>
                    </div>
                 </div>
              )
           )}
        </div>
        <div>
          <Footer />
        </div>
     </div>
  );
} 
  


export default Logement