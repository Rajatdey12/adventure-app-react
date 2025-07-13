import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { cardData } from '../../components/common/common'

function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout This Epic Adventures</h1>
        <div className="cards__container">
            {cardData.map((card) => (
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={card.imgUrl}
                    text={card.description}
                    label={card.title}
                    path='/services'
                    />
                </ul>
            </div>
            ))}
        </div>
      
    </div>
  )
}

export default Cards
