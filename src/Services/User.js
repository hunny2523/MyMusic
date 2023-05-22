import { spotifyApi } from "./spotify";


export const fetchUserProfile = async () => {
    try {
        const response = await spotifyApi.getMe();
        console.log(response?.country);

        return { name: response?.display_name, email: response?.email, followers: response?.followers, DOB: response?.birthdate, image: response?.images };
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch user profile');
    }
};
