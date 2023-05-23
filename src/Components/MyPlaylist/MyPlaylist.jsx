import React from 'react'
import { getMyPlaylist } from '../../Services/myPlaylist'
import { useSelector } from 'react-redux'
// import { getAlbums } from '../../Services/getAlbums'

const MyPlaylist = () => {
    const user = useSelector(state => state.auth.user)

    const handleClick = (id) => {
        getMyPlaylist(id);
        // getAlbums()
    }
    return (
        <div>
            Myplaylisrt
            {user &&
                <button onClick={() => handleClick(user.id)}>GetmyPlaylist</button>
            }
        </div>
    )
}

export default MyPlaylist
