import { spotifyApi } from "./spotify"


export const getMyPlaylist = async () => {
    const data = await spotifyApi.getNewReleases();
    console.log(data)


}

