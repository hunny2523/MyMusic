import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavoriteTracks } from '../../Store/Favorites'
import TrackList from '../../Components/TrackList/TrackList'
import { currentTrackActions } from '../../Store/CurrentTrackSlice'

const Favorites = () => {

    const dispatch = useDispatch()


    const favoritesTracks = useSelector(state => state.favorites.favoriteTracks)
    const TrackIdsQueue = favoritesTracks.map((tarck) => tarck.id)

    const handleTrack = (id) => {
        dispatch(currentTrackActions.addTrackId(id));
        dispatch(currentTrackActions.addTrackQueue(TrackIdsQueue));
    }

    return (
        favoritesTracks && (
            favoritesTracks?.map((track) => {
                return (
                    <React.Fragment key={track.id} >
                        <TrackList data={track} handleTrack={handleTrack} />
                    </React.Fragment>
                );
            })
        )

    )
}

export default Favorites