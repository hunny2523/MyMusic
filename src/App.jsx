import React, { useEffect } from 'react';
import { getAccessToken, spotifyApi } from './Services/spotify';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, fetchUserData } from './Store/authSlice';
import Login from './Pages/Login/Login';
import Body from './Pages/Body/Body';



const App = () => {

  const accessToken = useSelector((state) => state.auth.accessToken)
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
        <Body />
      ) : (
        <Login />
      )}
    </React.Fragment>
  );
};

export default App;