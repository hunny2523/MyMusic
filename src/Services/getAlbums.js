// import { spotifyApi } from "./spotify"

// export const getAlbums = () => {
//     // spotifyApi.getAlbumTracks()
//     spotifyApi
//         .getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
//         .then(function (data) {
//             console.log(data);
//             return data.tracks.map(function (t) {
//                 return t.id;
//             });
//         })
//         .then(function (trackIds) {
//             return spotifyApi.getTracks(trackIds);
//         })
//         .then(function (tracksInfo) {
//             console.log(tracksInfo);
//         })
//         .catch(function (error) {
//             console.error(error);
//         });
// }