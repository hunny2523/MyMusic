import React from 'react'
import NewReleases from '../../Components/NewReleases/NewReleases';

import FeaturedPlaylist from '../../Components/FeaturedPlaylist/FeaturedPlaylist';
import Categories from '../../Components/Categories/Categories';
import '../../assets/Styles/common.css'

const Main = () => {

    return (
        <div className='main-container'>

            <Categories />
            <FeaturedPlaylist />
            <NewReleases />
        </div>
    )
}

export default Main