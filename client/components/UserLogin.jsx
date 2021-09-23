import React from 'react';
import GoogleLogin from 'react-google-login';

const UserLogin = (props) => {
  return (
    <div id='loginPanel'>
      <h1>RECIPE</h1>
      <h2>Find Recipe Inspiration</h2>
      <GoogleLogin 
        id='googleButton'
        clientId={process.env.CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={()=> props.setIsLoggedIn(true)}
        // onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
      Username
      <input type='text' id='username' name='username' />
      Password
      <input type='password' id='password' name='password' />
      <button onClick={(event) => props.loginUser(event)}>Login!</button>
      <button onClick={(event) => props.createUser(event)}>
        Create New User
      </button>
    </div>
  );
};

export default UserLogin;
