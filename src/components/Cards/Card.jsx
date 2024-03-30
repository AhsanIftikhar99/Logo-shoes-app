import React, { useState } from 'react';
import { shoesData as initialShoesData } from '../../assets/shoesData';
import './card.css'

function Card() {
  // Initialize state with initial shoes data
  const [shoesData, setShoesData] = useState(initialShoesData);

  // Function to change all shoes data
  function changeAllShoes() {
    // Map through each shoe and change its properties
    const newShoesData = shoesData.map(shoe => ({
      ...shoe,
      // Generate a random name
      name: 'LOGO ' + Math.floor(Math.random() * 10000) + ' BKA',
      // Generate a random price
      price: 'Rs. ' + Math.floor(Math.random() * 100000),
      // Generate a random sold status
      isSold: Math.random() < 0.5
    }));

    // Update the state with the new shoes data
    setShoesData(newShoesData);
  }

  return (
    <div>
      <div className="card-container">
        {/* Map through each shoe and render its details */}
        {shoesData.map((shoe, index) => (
          <div key={index}>
            {/* Conditionally render 'Sold Out' if the shoe is sold */}
            {shoe.isSold ? <p className='sold'>Sold Out</p> : <p style={{ marginTop: '64px' }}></p>}
            <div className="card">
              <img src={shoe.img} alt={shoe.name} />
              <h5>{shoe.name}</h5>
              <p>{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='btncontainer'>
        {/* Button to change all shoes data */}
        <button onClick={changeAllShoes}>Change All Shoes</button>
      </div>
    </div>
  )
}

export default Card;