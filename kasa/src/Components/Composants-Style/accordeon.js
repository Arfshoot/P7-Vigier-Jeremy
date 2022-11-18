import './accordeon.css'
import dataApropos from '../../dataApropos.json'
import { useState } from 'react'


 function Accordeon() {

const [selected , setSelected] = useState(null)

const toggle = (i) => {
	if (selected === i){
		return setSelected("0")
	}

    setSelected(i)

}

  return ( 
    <div className="wrapper">
        <div className="accordeon">
			{dataApropos.map((item, i) => (
				<div className ='item'>
					<div className='title' onClick={() => toggle(i)}>
						<h2>{item.question}</h2>
						<span>{selected === i ? '-' : '+'}</span>
					</div>
					<div className= {selected === i ? 'content show' : 'content'}>
						{item.answer}
					</div>
				</div>
					

			))}
		</div>
    </div>




    )


}











export default Accordeon


