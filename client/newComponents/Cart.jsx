import React from 'react';

const Cart = props => {
  return (
    <ol 
      className='cartList'
      id={props.id}>
      {props.value}
    </ol>
  );
}

export default Cart;