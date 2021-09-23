import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
// import from child components...

// import NavBar from '../newComponents/NavBar.jsx';
// import Aside from '../newComponents/Aside.jsx';
// import FindMeal from '../newComponents/FindMeal.jsx';
// import FavsDisplay from '../newComponents/FavsDisplay.jsx';


// const mapStateToProps = state => ({
//   // add pertinent state here
//   totalCards: state.markets.totalCards, //cards - keeping track of total amount of cards
//   totalMarkets: state.markets.totalMarkets
  
// });


const RecipeContainer = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // function mapStateToProps(state, ownProps) {
    
  // }

    return(
      <div id='app'>
        hello
        {/* <NavBar/>
        <Aside/>
        <FindMeal/>
        <FavsDisplay/> */}
      </div>
    );
}



// export default connect(mapStateToProps, null)(RecipeContainer);
export default RecipeContainer;