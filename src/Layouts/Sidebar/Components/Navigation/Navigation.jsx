import React, { useEffect } from 'react';
import {
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserPlaylistCard from '../UserPlaylistCard/UserPlaylistCard';
import { Add } from '@mui/icons-material';
import { createUserPlaylist, fetchUserPlaylists } from '../../../../Store/userPlaylists';
import UserPlaylists from '../UserPlaylists/UserPlaylists';
import { sidebarLabels } from '../../Data/SidebarData';



const Navigation = () => {

    const options = sidebarLabels.sidebarLabels.sidebarOptions;

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()


    const AddUserPlaylist = () => {
        if (user) {
            console.log(user);
            dispatch(createUserPlaylist(user.id))
        }
    }

    return (
        <>
            <List>
                {options?.map((option) => {
                    return (

                        <NavLink
                            key={option.id}
                            to={option.path}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? `${styles.active} ${styles.navlink}`
                                        : styles.navlink
                            }
                        >
                            <ListItemButton>
                                <ListItemIcon className={styles.navigationIcons}>
                                    {option.icon}
                                </ListItemIcon>
                                <ListItemText style={{ whiteSpace: 'nowrap' }} primary={option.name}></ListItemText>
                            </ListItemButton>

                        </NavLink>
                    )
                })}

            </List>
            <div className='d-flex-row' style={{ justifyContent: "space-between" }}>
                <Typography variant="caption" color="grey" className={styles.myMusicText}>
                    MY MUSIC
                </Typography>
                <IconButton className={styles.AddUserPlaylistBtton} sx={{ backgroundColor: "var(--secondary-color)", marginRight: "1em", borderRadius: "5px" }} onClick={AddUserPlaylist}>
                    <Add className="darkModeIcon" />
                </IconButton>
            </div>




            <UserPlaylists />


        </>
    );
};

export default Navigation;
