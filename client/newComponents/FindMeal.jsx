import React from 'react';
import MealDisplay from './MealDisplay.jsx';
import Filter from './Filter.jsx';


const FindMeal = (props) => {
  return (
    <div className='layout'>
      <Filter changeMealDisplay={props.changeMealDisplay}/>
      {/* <MealDisplay /> */}
    </div>
  )
};


export default FindMeal;
