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

const Main = () => {
    const scrollableRef = useRef(null)

    return (
        <div className={styles.mainContainer} ref={scrollableRef}>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/search" element={<Search />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="*" element={<NotFound />} />

            </Routes>


            <ScrollToTopButton scrollableRef={scrollableRef} />
        </div>
    )
}

export default Main