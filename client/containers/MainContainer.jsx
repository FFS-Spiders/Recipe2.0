import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import { connect } from 'react-redux';
import UserLogin from '../newComponents/UserLogin.jsx';
import * as actions from '../actions/actions.js';

const mapStateToProps = state => ({
  // add pertinent state here
  loggedIn: state.recipes.loggedIn,
  username: state.recipes.username,
  password: state.recipes.password,
  
});
const mapDispatchToProps = dispatch => (
  {
    isLoggedIn : (username, password) => {
      return dispatch(actions.logIn(username, password))},
    createUser: (username, password) => {
      return dispatch(actions.createUser(username,password))
    }
  }
)

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loggedIn === 'false') {
      return (
        <div>
          <UserLogin loginUser={this.props.isLoggedIn} createUser={this.props.createUser} />
        </div>
      )
    } else {
      return (
        <div>
          <RecipeContainer/> 
        </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);