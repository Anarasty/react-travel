import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>All these beautiful views you can see with your oun eyes in real life!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Embark on an exciting journey in a small mountain village'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='Have lunch on a floating ship while watching the beautiful views all around you'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Swim in clear and beautiful waters in nature'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='Spend a great weekend in the outlying villages'
              label='Exploration'
              path='/products'
            />
            <CardItem
              src='images/img5.jpg'
              text='Spend time on the beach surrounded by marine life and beautiful sea views'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;