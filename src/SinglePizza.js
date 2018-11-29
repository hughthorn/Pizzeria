import React from 'react'

const SinglePizza = (props) => {
  const {pizza} = props;
  return <div className='Single-Pizza'>
            <h3>{pizza.name}</h3>
            <div>
                <img src={pizza.imgUrl}/>
                <p>Price: ${pizza.price}</p>
                <p>Calories: {pizza.calories}</p>
            </div>
          </div>
}

export default SinglePizza;
