import React from 'react';
import { connect } from 'react-redux';
import FindMeal from '../newComponents/FindMeal.jsx';
import FavsDisplay from '../newComponents/FavsDisplay.jsx';

const mapStateToProps = state =>({
  recipeBodyDisply: '',
})

const mapDispatchToProps = dispatch => (
  {
  changeRecipeDisplay: (display) => {
    return dispatch(actios.changeRecipeDisplay);
  },
  }
)

const RecipeBodyContainer = props => {
  return(
    <div className='recipeContainer' >
      <FindMeal />
      recipe body
      {/* <FavsDisplay /> */}
      {/* Not Made yet
      <RecentMeals />
      <WeeklyPlanner /> */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBodyContainer);