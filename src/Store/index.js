import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import browseReducer from './browseSlice';
import currentTrackReducer from './CurrentTrackSlice'
import searchReducer from './SearchSlice'
import userPlaylistReducer from './userPlaylists'
import favoritesReducer from './Favorites';

const store = configureStore({
    reducer: {
        auth: authReducer,
        browse: browseReducer,
        currentTrack: currentTrackReducer,
        search: searchReducer,
        userPlaylist: userPlaylistReducer,
        favorites: favoritesReducer
    },
});

export default store;
