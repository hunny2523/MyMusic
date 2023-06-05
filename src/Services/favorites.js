import { spotifyApi } from "./spotify";

export const getUserFavoritesTrack = async () => {
    try {
        const response = await spotifyApi.getMySavedTracks();
        const tracks = response.items.map((item) => item.track);
        console.log(tracks);
        return tracks;
    } catch (error) {
        console.log("here");
        throw Error(error.message);
    }
}

export const addTrackToFavorites = async (trackID) => {
    try {
        console.log(trackID);
        await spotifyApi.addToMySavedTracks([trackID])
        const response = spotifyApi.getTrack(trackID);
        console.log("my respose");
        return response;
        // return response;
    } catch (error) {
        console.log("here");
        throw Error(error.message);
    }
}

export const removeFromFavourties = async (trackID) => {
    try {
        await spotifyApi.removeFromMySavedTracks([trackID]);
        return trackID;
    } catch (error) {
        console.log("here");
        throw Error(error.message);
    }

}