import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FavoriteBorderOutlined, HomeOutlined, NewReleasesOutlined, Settings } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarFooter() {
    const location = useLocation()
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ width: 500, backgroundColor: "var(--primary-color)", color: "var(--text-color)" }} value={location.pathname} onChange={handleChange} >
            <BottomNavigationAction
                label="Home"
                value="/"
                icon={<HomeOutlined className='darkModeIcon' />}
                component={Link}
                to="/"
                sx={{ color: "var(--text-color)" }}
            />
            <BottomNavigationAction
                label="Favorites"
                value="/favorites"
                icon={<FavoriteBorderOutlined className='darkModeIcon' />}
                component={Link}
                to="/favorites"
            />
            <BottomNavigationAction
                label="Explore"
                value="/explore"
                icon={<NewReleasesOutlined className='darkModeIcon' />}
                component={Link}
                to="/explore"
            />
            <BottomNavigationAction
                label="Settings"
                value="/settings"
                icon={<Settings className='darkModeIcon' />}
                component={Link}
                to="/settings"
            />

        </BottomNavigation>
    );
}