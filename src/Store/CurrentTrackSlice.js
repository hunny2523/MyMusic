import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trackID: null,
    TrackQueue: []
};


// Define the slice
const currentTrackSlice = createSlice({
    name: 'currentTrack',
    initialState,
    reducers: {
        addTrackId: (state, action) => {
            state.trackID = action.payload;
        },
        addTrackQueue: (state, action) => {
            state.TrackQueue = action.payload;
        },
        setPrevTrack: (state) => {
            const currentIndex = state.TrackQueue.findIndex((trackId) => trackId === state.trackID);
            console.log(currentIndex);
            if (currentIndex > 0) {
                state.trackID = state.TrackQueue[currentIndex - 1];
            }
            if (currentIndex <= 0) {
                state.trackID = state?.TrackQueue[state.TrackQueue.length - 1]
            }
        },
        setNextTrack: (state) => {
            console.log("here");
            const currentIndex = state.TrackQueue.findIndex((trackId) => trackId === state.trackID);
            console.log(currentIndex);
            if (currentIndex < state.TrackQueue.length - 1) {
                console.log("inside");
                state.trackID = state.TrackQueue[currentIndex + 1];
            }
            if (currentIndex >= state.TrackQueue.length - 1) {
                console.log("inside 2");
                state.trackID = state?.TrackQueue[0]
            }
        }
    },

});

// Export the actions and reducer
export default currentTrackSlice.reducer;
export const currentTrackActions = currentTrackSlice.actions;

