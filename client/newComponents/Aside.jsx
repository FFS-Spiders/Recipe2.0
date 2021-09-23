import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart.jsx';
import Pantry from './Pantry.jsx';

const Aside = (props) => {
  const pantryItems = [];
  for (let i = 0; i < props.pantry.length; i++) {
    pantryItems.push(<Pantry key={i} id={i} value={props.pantry[i]} />)
  }
  const cartItems = [];
  for (let i = 0; i < props.cart.length; i++) {
    cartItems.push(<Cart key={i} id={i} value={props.cart[i]} />)
  }
  return (
    <div className='listContainer' id='aside'>
      <h3>My Items</h3>
      <h4>Pantry</h4>
      <div>
        {pantryItems}
      </div>
      <div>
        <input
          id='pantryInput'
          placeholder='Enter item here...'
        ></input>
        <button
          onClick={() => {
            return props.addPantry(document.getElementById('pantryInput').value);
          }}
        >
          Add to List
        </button>
      </div>

      <h4>Shopping List</h4>
      <div>
        {cartItems}
      </div>
      <div>
        <input
          id='cartInput'
          placeholder='Enter item here...'
        ></input>
        <button
          onClick={() => {
            props.addCart(document.getElementById('cartInput').value)
          }}
        >
          Add to List
        </button>
      </div>
    </div>
  );
};

export default connect(null, null)(Aside);
