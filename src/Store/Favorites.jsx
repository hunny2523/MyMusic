import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addTrackToFavorites, getUserFavoritesTrack, removeFromFavourties } from '../Services/favorites';

const initialState = {
    favoriteTracks: [],
    favoriteTracksIDs: [],
    isLoading: false,
    error: null,
};

export const fetchFavoriteTracks = createAsyncThunk(
    'favorites/fetchFavoriteTracks',
    async () => {
        try {
            const response = await getUserFavoritesTrack();
            return response;
        } catch (error) {
            throw Error(error.message);
        }
    }
);

export const addTrackToFavorite = createAsyncThunk(
    'favorites/addTrackToFavorite',
    async (trackID) => {
        try {
            const response = await addTrackToFavorites(trackID);
            console.log(response);
            return response;

        } catch (error) {
            throw Error(error.message);
        }
    }
);
export const removeTrackFromFavourties = createAsyncThunk(
    'favorites/removeTrackFromFavourties',
    async (trackID) => {
        try {
            const response = await removeFromFavourties(trackID);
            console.log(response);
            return response;
        } catch (error) {
            throw Error(error.message);
        }
    }
);

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoriteTrack: (state, action) => {
            state.favoriteTracks.push(action.payload);
        },
        removeFromFavourties: (state, action) => {
            state.favoriteTracksIDs.filter(ID => ID !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoriteTracks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTrackToFavorite.fulfilled, (state, action) => {
                state.favoriteTracksIDs.push(action.payload.id);
                state.favoriteTracks.push(action.payload);
            })
            .addCase(removeTrackFromFavourties.fulfilled, (state, action) => {
                state.favoriteTracksIDs = state.favoriteTracksIDs.filter(id => id !== action.payload);
                state.favoriteTracks = state.favoriteTracks.filter(track => track.id !== action.payload);
            })

            .addCase(fetchFavoriteTracks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.favoriteTracks = action.payload;
                state.favoriteTracksIDs = state.favoriteTracks.map(track => track.id)
            })
            .addCase(fetchFavoriteTracks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const favoritesSliceActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
