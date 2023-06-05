import Categories from "../Components/Categories/Categories";
import FeaturedPlaylist from "../Components/FeaturedPlaylist/FeaturedPlaylist";
import NewReleases from "../Components/NewReleases/NewReleases";
import User from "../Components/User/User";
import Album from "../Container/Album/Album";
import Category from "../Container/Category/Category";
import Favorites from "../Container/Favorites/Favorites";
import Home from "../Container/Home/Home";
import NotFound from "../Container/NotFound/NotFound";
import Playlist from "../Container/Playlist/Playlist";
import Search from "../Container/Search/Search";



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
        path: '*',
        component: <NotFound />
    }
];

export default routesData;
