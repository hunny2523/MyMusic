import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FavoriteBorderOutlined, HomeOutlined, NewReleasesOutlined, Person, PersonOutline, Settings } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarFooter() {
    const location = useLocation()
    const [value, setValue] = React.useState('recents');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ width: "100%", position: "absolute", bottom: "0", backgroundColor: "var(--primary-color)", color: "var(--text-color)" }} value={location.pathname} onChange={handleChange} >
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
                value="/newReleases"
                icon={<NewReleasesOutlined className='darkModeIcon' />}
                component={Link}
                to="/newReleases"
            />
            <BottomNavigationAction
                label="User"
                value="/user"
                icon={<PersonOutline className='darkModeIcon' />}
                component={Link}
                to="/user"
            />

        </BottomNavigation>
    );
}