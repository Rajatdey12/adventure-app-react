import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const cardData = [
    {
        id: 1,
        title: 'Paragliding',
        description: 'Fun is when you talk to wind',
        imgUrl: '/images/paragliding.jpg'
    },
    {
        id: 2,
        title: 'Mountain Climbing',
        description: 'The serene view from above the mountains',
        imgUrl: '/images/mountain-climbing.jpg'
        
    },
    {
        id: 3,
        title: 'Bunjee Jumping',
        description: 'If you have guts go for it',
        imgUrl: '/images/bunjee.jpg'
    },
    {
        id: 4,
        title: 'Sea Surfing',
        description: 'Surfing like gliding on water',
        imgUrl: '/images/sea-surfing.jpg'
    },
    {
        id: 5,
        title: 'Rafting',
        description: 'The Adreline rush in high current waters',
        imgUrl: '/images/riverrafting.webp'
    },
    {
        id: 6,
        title: 'Trekking',
        description: 'Explore the hidden waterfall deep inside the Amazon Jungle',
        imgUrl: 'images/img-9.jpg'
    },

]

function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout This Epic Destination</h1>
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
