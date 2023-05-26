import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { DarkMode } from '@mui/icons-material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import styles from './Header.module.css';
import { SearchActions } from '../../Store/SearchSlice';
import { spotifyApi } from '../../Services/spotify';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const categories = useSelector((state) => state.browse.categories)

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    useEffect(() => {
        const handleSearchDebounced = debounce((query) => {

            dispatch(SearchActions.chamgeSearchQuery(query));

        }, 500);

        handleSearchDebounced(inputValue);

        return () => {
            handleSearchDebounced.cancel();
        };
    }, [inputValue, dispatch]);


    useEffect(() => {
        async function fetchGenes() {
            const categories = await spotifyApi.getCategories()
            console.log(categories);


        }

        fetchGenes()
    }, [])

    const handleFocus = () => {
        navigate('/search');
    };



    return (
        <div className={styles.header}>
            <div className={styles.searchBarContainer}>
                <SearchIcon style={{ color: 'grey' }} />
                <input
                    type="search"
                    placeholder="Search For music, artists and more"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
            </div>
            <DarkMode />
        </div>
    );
};

export default Header;
