import React from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import {
    HomeOutlined,
    CollectionsBookmarkOutlined,
    Person2Outlined,
    AccessAlarmOutlined,
    InsertDriveFileOutlined
} from '@mui/icons-material';
import styles from './Navigation.module.css';



const NavigationItem = ({ icon, primary }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton >
                <ListItemIcon className={styles.navigationIcons}>{icon}</ListItemIcon>
                <ListItemText style={{ whiteSpace: 'nowrap' }} primary={primary} />
            </ListItemButton>
        </ListItem>
    );
};

const Navigation = () => {
    return (
        <div>
            <List>
                <NavigationItem icon={<HomeOutlined />} primary="Home" />
                <NavigationItem icon={<CollectionsBookmarkOutlined />} primary="Album" />
                <NavigationItem icon={<Person2Outlined />} primary="Artist" />
            </List>
            <Typography variant="caption" color="grey" className={styles.myMusicText}>
                MY MUSIC
            </Typography>
            <List>
                <NavigationItem icon={<AccessAlarmOutlined />} primary="Recently Played" />
                <NavigationItem icon={<InsertDriveFileOutlined />} primary="Files" />
            </List>
        </div>
    );
};

export default Navigation;
