import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'
// import from child components...
import NavBar from '../newComponents/NavBar.jsx';
import Aside from '../newComponents/Aside.jsx';
import RecipeBodyContainer from './RecipeBodyContainer.jsx'

const mapStateToProps = state => ({
  // add pertinent state here
  // loggedIn: state.recipes.loggedIn,
  // username: state.recipes.username,
  // password: state.recipes.password,
  pantry: state.recipes.pantry,
  cart: state.recipes.cart,
});

const mapDispatchToProps = dispatch => (
  {
    addPantry: (item) => {
      return dispatch(actions.addPantryActionCreator(item))
    },
    addCart: (item) => {
      return dispatch(actions.addCartActionCreator(item));
    },
  }
);

class RecipeContainer extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <NavBar/>
        <Aside 
        pantry={this.props.pantry} 
        cart={this.props.cart} 
        addPantry={this.props.addPantry}
        addCart={this.props.addCart}/>
        <RecipeBodyContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
