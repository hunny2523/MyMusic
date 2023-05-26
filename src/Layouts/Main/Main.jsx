import React from 'react'
import '../../assets/Styles/common.css'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Container/Home/Home';
import Playlist from '../../Container/Playlist/Playlist';
import NotFound from '../../Container/NotFound/NotFound';
import Album from '../../Container/Album/Album';
import Search from '../Search/Search';


const Main = () => {

    return (
        <div className='main-container'>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />

            </Routes>



        </div>
    )
}

export default Main