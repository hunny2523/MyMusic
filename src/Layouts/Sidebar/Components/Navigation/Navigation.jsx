import React from 'react';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';



const Navigation = ({ options }) => {
    console.log("options" + options);
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
            <Typography variant="caption" color="grey" className={styles.myMusicText}>
                MY MUSIC
            </Typography>

        </>
    );
};

export default Navigation;
