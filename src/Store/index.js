import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import browseReducer from './browseSlice';
import currentTrackReducer from './CurrentTrackSlice'
import searchReducer from './SearchSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        browse: browseReducer,
        currentTrack: currentTrackReducer,
        search: searchReducer
    },
});

export default store;
