import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import UserPlaylistCard from '../UserPlaylistCard/UserPlaylistCard';
import favoritePlaylistImage from '../../../../assets/Images/likedSongs.png'
import styles from './UserPlaylists.module.css'
const UserPlaylists = () => {

    const userPlaylists = useSelector(state => state.userPlaylist.playlists);

    return (
        userPlaylists && (
            <div className={styles.userPlaylistWrapper}>

                <UserPlaylistCard name="Liked" favorites={true} image={favoritePlaylistImage} />

                {userPlaylists?.map((playlist) => {
                    if (playlist?.type === "playlist") {
                        return <UserPlaylistCard key={playlist.id} id={playlist.id} name={playlist.name} image={playlist.images[0]?.url} />
                    }
                })}

            </div>
        )
    )
}

export default memo(UserPlaylists)
