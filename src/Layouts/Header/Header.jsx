import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import styles from './Header.module.css'
import { Settings, SettingsAccessibilityOutlined, SettingsApplicationsOutlined } from '@mui/icons-material';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.searchBarContainer}>
                <SearchIcon style={{ color: "grey" }} />
                <input type='search' placeholder='Search For music,artists and more' />
            </div>
            <div>
                <Settings />
            </div>
        </header>
    );
};

export default Header;
