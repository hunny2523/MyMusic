import React from 'react'
import Categories from '../../Components/Categories/Categories'
import FeaturedPlaylist from '../../Components/FeaturedPlaylist/FeaturedPlaylist'
import NewReleases from '../../Components/NewReleases/NewReleases'
import { useDispatch } from 'react-redux'
import { fetchCategories, fetchFeaturedPlaylists, fetchNewReleases } from '../../Store/browseSlice'
import { useEffect } from 'react'
import { fetchFavoriteTracks } from '../../Store/Favorites'



const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFeaturedPlaylists())
        dispatch(fetchNewReleases())
        dispatch(fetchCategories())
        dispatch(fetchFavoriteTracks());
    }, [dispatch])


    return (
        <>
            <Categories atHomePage="true" />
            <FeaturedPlaylist atHomePage="true" />
            <NewReleases atHomePage="true" />
        </>
    )
}

export default Home
