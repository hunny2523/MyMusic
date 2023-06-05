import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spotifyApi } from '../../../../Services/spotify';
import { useState } from 'react';
import TrackList from '../../../../Components/TrackList/TrackList';
import { currentTrackActions } from '../../../../Store/CurrentTrackSlice';
import { useParams } from 'react-router-dom';

const SearchResults = ({ setRender }) => {
    const params = useParams()
    const [searchTracks, setSearchTracks] = useState(null)
    const searchTrack = useSelector((state) => state.search.searchQuery);

    const dispatch = useDispatch()

    const handleTrack = (id) => {
        dispatch(currentTrackActions.addTrackId(id));
    }

    useEffect(() => {
        console.log(searchTrack);
        if (searchTrack.trim() !== "") {
            async function getSearchTrack() {
                const data = await spotifyApi.searchTracks(searchTrack, { limit: 1 });
                setSearchTracks(data);
            }
            getSearchTrack();
        }
        setSearchTracks(null)
    }, [searchTrack])


    return (
        searchTracks && (
            searchTracks?.tracks?.items?.map((track) => {
                return (
                    <React.Fragment key={track.id} >
                        <TrackList data={track} handleTrack={handleTrack} searchTrack={true} params={params} setRender={setRender} />
                    </React.Fragment>
                );
            })
        )

    )
}

export default SearchResults