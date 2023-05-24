
import { spotifyApi } from "./spotify";


export const fetchUserProfile = async () => {
    try {
        if (spotifyApi.getAccessToken()) {

            const response = await spotifyApi.getMe();

            return { name: response?.display_name, email: response?.email, followers: response?.followers, image: response?.images, id: response.id };
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch user profile');
    }
};