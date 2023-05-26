import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: "",
};


// Define the slice
const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        chamgeSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    },

});

// Export the actions and reducer
export default SearchSlice.reducer;
export const SearchActions = SearchSlice.actions;

