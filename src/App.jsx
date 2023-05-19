import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import useAuthentication from './Hooks/useAuthentication';
import { SpotifyAuthnticationUrl, setAccessToken } from './Services/auth';
import { useDispatch } from 'react-redux';
import { authActions } from './Store/authSlice';
import Login from './Pages/Login/Login';


const spotifyApi = new SpotifyWebApi();

const App = () => {


  const dispatch = useDispatch()
  const { isLoggedIn } = useAuthentication();

  console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      const token = setAccessToken();
      if (token) {
        dispatch(authActions.setAccessToken(token));
        localStorage.setItem('token', token)
      }
      console.log("token", token);
    }
  }, []);




  console.log("isLoggedIn " + isLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, Honey</h2>
          <p>Email: </p>
          {spotifyApi.getAccessToken()}
          <button >Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
