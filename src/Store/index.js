import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import browseReducer from './browseSlice';
import currentTrackReducer from './CurrentTrackSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        browse: browseReducer,
        currentTrack: currentTrackReducer
    },
});

export default store;
