import React from 'react';
import "./Card.css"

const Card = ({card_title,card_detail,Img}) => {
    console.log(card_title,card_detail,Img)
  return (
    <div className='card'>
        <div className='card_image'>
          <img src={Img} alt="Global" />
        </div>

        <div className='card_description'>
            <h1 className='card_description_title'>{card_title}</h1>
            <p className='card_description_detail'>{card_detail}</p>
            </div>
        
        
    </div>
  )
}

export default Card