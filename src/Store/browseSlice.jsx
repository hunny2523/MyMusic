import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories, getCategoryPlaylists, getFeaturedPlaylists, getNewReleases } from '../Services/browse';


// Define your async thunks
export const fetchNewReleases = createAsyncThunk('browse/fetchNewReleases', async () => {
    const response = await getNewReleases();
    return response;
});

export const fetchFeaturedPlaylists = createAsyncThunk('browse/fetchFeaturedPlaylists', async () => {
    const response = await getFeaturedPlaylists();
    console.log("returning response" + response);
    return response;
});

export const fetchCategories = createAsyncThunk('browse/fetchCategories', async () => {
    const response = await getCategories();
    return response;
});

export const fetchCategoryPlaylists = createAsyncThunk('browse/fetchCategoryPlaylists', async (categoryId) => {
    const response = await getCategoryPlaylists(categoryId);
    return response;
});


// Define the initial state
const initialState = {
    newReleases: [],
    featuredPlaylists: [],
    categories: [],
    categoryPlaylists: [],
    loading: false,
    error: null,
};


// Define the slice
const browseSlice = createSlice({
    name: 'browse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle fetchNewReleases fulfilled
        builder.addCase(fetchNewReleases.fulfilled, (state, action) => {
            state.newReleases = action.payload;
            state.loading = false;
            state.error = null;
        });
        // Handle fetchFeaturedPlaylists fulfilled
        builder.addCase(fetchFeaturedPlaylists.fulfilled, (state, action) => {
            state.featuredPlaylists = action.payload;
            state.loading = false;
            state.error = null;
        });
        // Handle fetchCategoryPlaylists fulfilled
        builder.addCase(fetchCategoryPlaylists.fulfilled, (state, action) => {
            state.categoryPlaylists = action.payload;
            state.loading = false;
            state.error = null;
        });
        // Handle fetchCategories fulfilled
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addMatcher(
            (action) => action.type.startsWith('browse/fetch') && action.type.endsWith('/rejected'),
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
        );

        builder.addMatcher(
            (action) => action.type.startsWith('browse/fetch') && action.type.endsWith('/pending'),
            (state) => {
                state.loading = true;
                state.error = null;
            }
        );
    },
});

// Export the actions and reducer
export default browseSlice.reducer;

