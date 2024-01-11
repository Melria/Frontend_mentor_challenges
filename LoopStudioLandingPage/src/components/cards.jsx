//import React from 'react'
import data from '../data/data.json';

export const Card=()=> {
  return (
    <div className='grid'>
        {
            data.map((card) => (
                <div className="cardBox" key={card.index}>
                  <img src={card.image} alt='' /> 
                  <div className="div_lbl">
                      <p className='lbl'>{card.title}</p>
                  </div>                
                </div>
            ))
        }
    </div>
  )
}
