import React, { useRef } from 'react'
import '../../assets/Styles/common.css'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Container/Home/Home';
import Playlist from '../../Container/Playlist/Playlist';
import NotFound from '../../Container/NotFound/NotFound';
import Album from '../../Container/Album/Album';
import Search from '../Search/Search';
import styles from './Main.module.css'
import Category from '../../Container/Category/Category';
import ScrollToTopButton from '../ScrollToTop/ScrollToTop';
import FeaturedPlaylist from '../../Components/FeaturedPlaylist/FeaturedPlaylist';
import Categories from '../../Components/Categories/Categories';
import NewReleases from '../../Components/NewReleases/NewReleases';
import Favorites from '../../Container/Favorites/Favorites';
import User from '../../Components/User/User';
import { useSelector } from 'react-redux';

const Main = () => {
    const scrollableRef = useRef(null)

    const currentTrack = useSelector((state) => state.currentTrack.trackID);

    return (
        <div className={`${styles.mainContainer} ${!currentTrack ? styles.regularHeight : styles.TrimHeight}`} ref={scrollableRef}>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route path="/FeatuedPlaylists" element={<FeaturedPlaylist />} />
                <Route path="/NewReleases" element={<NewReleases />} />
                <Route path="/allCategories" element={<Categories />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/search" element={<Search />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<NotFound />} />

            </Routes>


            <ScrollToTopButton scrollableRef={scrollableRef} />
        </div>
    )
}

export default Main