import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trackID: null,
};


// Define the slice
const currentTrackSlice = createSlice({
    name: 'currentTrack',
    initialState,
    reducers: {
        addTrackId: (state, action) => {
            state.trackID = action.payload;
        }
    },

});

// Export the actions and reducer
export default currentTrackSlice.reducer;
export const currentTrackActions = currentTrackSlice.actions;

