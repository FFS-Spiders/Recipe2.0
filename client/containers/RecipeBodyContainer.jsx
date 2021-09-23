import React from 'react';
import { connect } from 'react-redux';
import FindMeal from '../newComponents/FindMeal.jsx';
import FavsDisplay from '../newComponents/FavsDisplay.jsx';
import * as actions from '../actions/actions.js'

const mapStateToProps = state =>({
  recipeBodyDisply: '',
})

const mapDispatchToProps = dispatch => (
  {
    changeMealDisplay: (list) => {
      return dispatch(actions.changeMealDisplay(list))
    },

  // changeRecipeDisplay: (display) => {
  //   return dispatch(actions.changeRecipeDisplay(display));
  //   },
  }
)

const RecipeBodyContainer = props => {
  return(
    <div className='recipeContainer'>
      <FindMeal changeMealDisplay={props.changeMealDisplay}/>
      {/* <FavsDisplay /> */}
      {/* Not Made yet
      <RecentMeals />
      <WeeklyPlanner /> */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBodyContainer);
