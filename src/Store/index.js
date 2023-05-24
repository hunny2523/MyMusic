import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import browseReducer from './browseSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        browse: browseReducer
    },
});

export default store;
