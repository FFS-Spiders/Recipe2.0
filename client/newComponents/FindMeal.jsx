import React from 'react';

import MealDisplay from './MealDisplay.jsx';
import Filter from './Filter.jsx';


function FindMeal () {

  return(
    <div>
      <Filter/>
      <MealDisplay/>
    </div>
  )
}


export default FindMeal;