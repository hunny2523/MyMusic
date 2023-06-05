import { Avatar, IconButton, Typography } from '@mui/material'
import React from 'react'
import styles from './UserPlaylistCard.module.css'
import { useNavigate } from 'react-router'
import { DeleteOutline } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { deleteUserPlaylist } from '../../../../Store/userPlaylists'



const UserPlaylistCard = ({ name, image, id, favorites }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        if (favorites) {
            navigate('/favorites');
            return;
        }
        const state = "userPlaylist";
        navigate(`/playlist/${id}`, { state });
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
            {!favorites &&
                <DeleteOutline
                    className={styles.deleteButton}
                    onClick={deletePlaylist}
                />
            }
        </div>

    )
}

export default UserPlaylistCard
