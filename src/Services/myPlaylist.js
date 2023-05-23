import { spotifyApi } from "./spotify"


export const getMyPlaylist = (id) => {
    console.log(spotifyApi.getAccessToken());
    spotifyApi.getShows().then(
        function (data) {
            console.log('Myplaylist', data);
        },
        function (err) {
            console.error(err);
        }
    );

}

