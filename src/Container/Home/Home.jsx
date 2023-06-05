import React from 'react'
import Categories from '../../Components/Categories/Categories'
import FeaturedPlaylist from '../../Components/FeaturedPlaylist/FeaturedPlaylist'
import NewReleases from '../../Components/NewReleases/NewReleases'


const Home = () => {

    return (
        <>
            <Categories atHomePage="true" />
            <FeaturedPlaylist atHomePage="true" />
            <NewReleases atHomePage="true" />
        </>
    )
}

export default Home
