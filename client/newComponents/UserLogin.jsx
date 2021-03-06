import React from 'react';
import GoogleLogin from 'react-google-login';

const UserLogin = (props) => {

  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.profileObj);
    props.googleLogin(response.profileObj);
  }
  return (
    <div id='loginPanel'>
      <h1>RECIPE</h1>
      <h2>Find Recipe Inspiration</h2>
      Username
      <input type='text' id='username' name='username' />
      Password
      <input type='password' id='password' name='password' />
      <button onClick={() => props.loginUser(document.getElementById('username').value, document.getElementById('password').value)}>Login!</button>
      <button onClick={() => props.createUser(document.getElementById('username').value, document.getElementById('password').value)}>
        Create New User
      </button>
      <GoogleLogin 
        id='googleButton'
        clientId={process.env.CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={responseGoogle}
        // onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default UserLogin;
