

import { spotifyApi } from "./spotify";
import { authActions } from "../Store/authSlice";


export const fetchUserProfile = async (dispatch) => {
    try {
        if (spotifyApi.getAccessToken()) {
            console.log("hello");
            const response = await spotifyApi.getMe();

            return { name: response?.display_name, email: response?.email, followers: response?.followers, image: response?.images, id: response.id };
        }
    } catch (error) {
        console.log(error);
        console.error('Error:', error);
        if (error.status === 401) {
            console.log("removed");
            localStorage.removeItem("token");
            dispatch(authActions.removeAccessToken())
        }
        throw new Error('Failed to fetch user profile')
    }
};