import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { spotifyApi } from '../../Services/spotify';
import ShowCategory from '../../Components/ShowCategory/ShowCategory';
import '../../assets/Styles/common.css'
import ShowPlaylist from '../../Components/ShowPlaylist/ShowPlaylist';
const Search = () => {
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const categories = useSelector((state) => state.browse.categories);
    const [data, setdata] = useState(null);

    useEffect(() => {

        console.log("-----------------searchQuery" + searchQuery);
        async function search() {
            console.log("searchquery+" + searchQuery);
            if (searchQuery.trim() !== '') {
                const searchData = await spotifyApi.search(searchQuery, [
                    'track',
                    'album',
                    'artist',
                    'playlist',
                ]);
                setdata(searchData);
                return;
            }
            setdata(null);
        }
        search();
    }, [searchQuery]);

    return (
        <>
            {data ? (
                <div className="verticalCardWrapper">
                    {
                        data?.playlists?.items.map((playlist) => {
                            if (playlist.type === "playlist") {
                                return <ShowPlaylist key={playlist.id} data={playlist} />
                            }
                        })}
                </div>






            ) : (
                <div className="verticalCardWrapper">
                    {categories?.items?.map((category) => {
                        return <ShowCategory key={category.id} data={category} />
                    })}
                </div>
            )}
        </>
    );
};

export default Search;
