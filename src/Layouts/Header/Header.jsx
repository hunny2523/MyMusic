import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import styles from './Header.module.css'
import { DarkMode, Settings } from '@mui/icons-material';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.searchBarContainer}>
                <SearchIcon style={{ color: "grey" }} />
                <input type='search' placeholder='Search For music,artists and more' />
            </div>
            <DarkMode />
        </div>
    );
};

export default Header;
