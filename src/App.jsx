import React, { useEffect } from 'react';
import { getAccessToken, spotifyApi } from './Services/spotify';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, fetchUserData } from './Store/authSlice';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';



const App = () => {

  const { accessToken } = useSelector((state) => state.auth)
  const dispatch = useDispatch()


  useEffect(() => {
    if (!accessToken) {
      const token = getAccessToken();
      if (token) {
        dispatch(authActions.setAccessToken(token));
      }
    }

    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      dispatch(fetchUserData());
    }

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