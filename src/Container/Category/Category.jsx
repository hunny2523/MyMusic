import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { spotifyApi } from '../../Services/spotify';
import ShowPlaylist from '../../Components/ShowPlaylist/ShowPlaylist';
import '../../assets/Styles/common.css'
const Category = () => {
    const params = useParams();

    const [data, setdata] = useState(null)

    useEffect(() => {

        async function fetchData() {
            const data = await spotifyApi.getCategoryPlaylists(params.id)
            setdata(data)
            console.log(data);
        }
        fetchData()

    }, [])
    return (
        data && (
            <div className="verticalCardWrapper">
                {
                    data?.playlists?.items.map((playlist) => {
                        if (playlist.type === "playlist") {
                            return <ShowPlaylist key={playlist.id} data={playlist} />
                        }
                    })}
            </div>
        )
    )
}

export default Category
