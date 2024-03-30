import React, { useState } from 'react';
import { shoesData as initialShoesData } from '../../assets/shoesData';
import './card.css'

function Card() {
  const [shoesData, setShoesData] = useState(initialShoesData);

  function changeAllShoes() {
    const newShoesData = shoesData.map(shoe => ({
      ...shoe,
      name: 'LOGO ' + Math.floor(Math.random() * 10000) + ' BKA', // generates a random number between 0 and 9999
      price: 'Rs. ' + Math.floor(Math.random() * 100000), // generates a random number between 0 and 99999
      isSold: Math.random() < 0.5 // generates a random boolean
    }));

    setShoesData(newShoesData);
  }

  return (
    <div>
      <div className="card-container">
        {shoesData.map((shoe, index) => (
          <>
            <div>
              {shoe.isSold ? <p className='sold'>Sold Out</p> : <p style={{ marginTop: '64px' }}></p>}
              <div key={index} className="card">
                <img src={shoe.img} alt={shoe.name} />
                <h5>{shoe.name}</h5>
                <p>{shoe.price}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className='btncontainer'>
        <button onClick={changeAllShoes}>Change All Shoes</button>

      </div>
    </div>
  )
}

export default Card