import React from 'react';

const Pantry = props => {
  return (
    <ol 
      className='pantryList'
      id={props.id}>
      {props.value}
    </ol>
  )
};

export default Pantry;
