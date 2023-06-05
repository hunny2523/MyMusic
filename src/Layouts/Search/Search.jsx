import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spotifyApi } from '../../Services/spotify';
import ShowCategory from '../../Components/ShowCategory/ShowCategory';
import '../../assets/Styles/common.css'
import ShowPlaylist from '../../Components/ShowPlaylist/ShowPlaylist';
import Headings from '../../Components/Headings/Headings';
import ShowAlbum from '../../Components/ShowAlbum/ShowAlbum';
import TrackList from '../../Components/TrackList/TrackList';
import { Grid } from '@mui/material';
import ShowArtists from '../../Components/showArtists/ShowArtists';
import { currentTrackActions } from '../../Store/CurrentTrackSlice';
const Search = () => {
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const categories = useSelector((state) => state.browse.categories);
    const [data, setdata] = useState(null);

    useEffect(() => {

        console.log("-----------------searchQuery" + searchQuery);
        async function search() {
            console.log("searchquery+" + searchQuery);
            if (searchQuery.trim() !== '') {
                const searchData = await spotifyApi.search(searchQuery, [
                    'track',
                    'album',
                    'artist',
                    'playlist',
                ], { limit: 10 });
                console.log(searchData);
                setdata(searchData);
                return;
            }
            setdata(null);
        }
        search();
    }, [searchQuery]);

    const dispatch = useDispatch()

    const handleTrack = (id) => {
        console.log("handle track");
        dispatch(currentTrackActions.addTrackId(id));
    }

    return (
        <>
            {data ? (
                <>
                    <Headings heading={"Playlists"} />
                    <div className="CardHorizontalContainer">
                        {
                            data?.playlists?.items.map((playlist) => {
                                if (playlist.type === "playlist") {
                                    return <ShowPlaylist key={playlist.id} data={playlist} />
                                }
                            })
                        }
                    </div>


                    <Headings heading={"Albums"} />
                    <div className="CardHorizontalContainer">
                        {
                            data?.albums?.items?.map((album) => {
                                if (album.type === "album") {
                                    return <ShowAlbum key={album.id} data={album} />
                                }
                            })
                        }
                    </div>

                    <Grid container>
                        <Grid item md={6} xs={12}>

                            <Headings heading={"Tracks"} />
                            <div className="p-1" style={{ height: "50vh", overflow: "auto" }}>
                                {
                                    data?.tracks?.items?.map((track) => {
                                        return (
                                            <React.Fragment key={track?.id} >
                                                <TrackList data={track} handleTrack={handleTrack} />
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </div>
                        </Grid >
                        <Grid item md={6} xs={12} className='p-1' >
                            <Headings heading={"Artists"} />
                            <div className="verticalCardWrapper" style={{ height: "50vh", overflow: "auto" }}>
                                {
                                    data?.artists?.items.map((artist) => {
                                        return <ShowArtists key={artist.id} data={artist} />
                                    })
                                }
                            </div>
                        </Grid>
                    </Grid>
                </>






            ) : (
                <div className="verticalCardWrapper">
                    {categories?.items?.map((category) => {
                        return <ShowCategory key={category.id} data={category} />
                    })}
                </div>
            )
            }
        </>
    );
};

export default Search;
