import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import NavBar from '../newComponents/NavBar.jsx';
import Aside from '../newComponents/Aside.jsx';
import FindMeal from '../newComponents/FindMeal.jsx';
import FavsDisplay from '../newComponents/FavsDisplay.jsx';

const mapStateToProps = state => ({
  // add pertinent state here
  loggedIn: state.recipes.loggedIn,
  username: state.recipes.username,
  password: state.recipes.password,
  
});
const mapDispatchToProps = dispatch => ({
  isLoggedIn : (username, password) => {
    return dispatch(actions.logIn(username, password))},
})

const RecipeContainer = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // function mapStateToProps(state, ownProps) {
    
  // }

    return(
      <div id='app'>
        <NavBar/>
        <Aside/>
        <FindMeal/>
        <FavsDisplay/>
      </div>
    );
}



// export default connect(mapStateToProps, null)(RecipeContainer);
export default RecipeContainer;