import React, { lazy } from "react";
const Categories = lazy(() => import("../Components/Categories/Categories"));
const FeaturedPlaylist = lazy(() => import("../Components/FeaturedPlaylist/FeaturedPlaylist"));
const NewReleases = lazy(() => import("../Components/NewReleases/NewReleases"));
const User = lazy(() => import("../Components/User/User"));
const Album = lazy(() => import("../Container/Album/Album"));
const Category = lazy(() => import("../Container/Category/Category"));
const Favorites = lazy(() => import("../Container/Favorites/Favorites"));
import Home from "../Container/Home/Home";
const Artist = lazy(() => import("../Container/Artist/Artist"));
const NotFound = lazy(() => import("../Container/NotFound/NotFound"));
const Playlist = lazy(() => import("../Container/Playlist/Playlist"));
const Search = lazy(() => import("../Container/Search/Search"));



const routesData = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/playlist/:id',
        component: <Playlist />
    },
    {
        path: '/FeatuedPlaylists',
        component: <FeaturedPlaylist />
    },
    {
        path: '/NewReleases',
        component: <NewReleases />
    },
    {
        path: '/allCategories',
        component: <Categories />
    },
    {
        path: '/album/:id',
        component: <Album />
    },
    {
        path: '/search',
        component: <Search />
    },
    {
        path: '/category/:id',
        component: <Category />
    },
    {
        path: '/favorites',
        component: <Favorites />
    },
    {
        path: '/user',
        component: <User />
    },
    {
        path: '/artist/:id',
        component: <Artist />
    },
    {
        path: '*',
        component: <NotFound />
    }
];

export default routesData;
