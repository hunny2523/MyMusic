import React, { useEffect } from 'react';
import { getAccessToken, spotifyApi } from './Services/spotify';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, fetchUserData } from './Store/authSlice';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';


const App = () => {

  const { accessToken, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()


  useEffect(() => {
    if (!accessToken) {
      const token = getAccessToken();
      if (token) {
        dispatch(authActions.setAccessToken(token));
      }
    }
    spotifyApi.setAccessToken(accessToken);
    dispatch(fetchUserData());
    console.log(user, spotifyApi.getAccessToken);
  }, [accessToken]);




  return (
    <React.Fragment>
      {accessToken ? (
        <Home />
      ) : (
        <Login />
      )}
    </React.Fragment>
  );
};

export default App;
