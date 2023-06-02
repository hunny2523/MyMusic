import { Avatar, IconButton, Typography } from '@mui/material'
import React from 'react'
import styles from './UserPlaylistCard.module.css'
import { useNavigate } from 'react-router'
import { Delete, DeleteForeverOutlined, DeleteOutline, DeleteOutlined } from '@mui/icons-material'
import { spotifyApi } from '../../../../Services/spotify'
import { useDispatch } from 'react-redux'
import { deleteUserPlaylist } from '../../../../Store/userPlaylists'



const UserPlaylistCard = ({ name, image, id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleClick = (id) => {
        navigate(`/playlist/${id}`);
    }

    const deletePlaylist = async (event) => {
        event.stopPropagation()
        dispatch(deleteUserPlaylist(id))
    }
    return (

        <div className={styles.UserPlaylistCardContainer} onClick={() => handleClick(id)}>
            <div >
                <Avatar variant='rounded' className={styles.userPlaylistAvatar} src={image} />
                <Typography noWrap>{name}</Typography>
            </div>
            <IconButton onClick={deletePlaylist}>
                <DeleteOutline className="darkModeIcon" />
            </IconButton>
        </div>

    )
}

export default UserPlaylistCard
