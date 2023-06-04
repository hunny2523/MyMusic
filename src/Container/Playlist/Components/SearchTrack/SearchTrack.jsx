import { SearchOutlined } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material'
import debounce from 'lodash.debounce';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchActions } from '../../../../Store/SearchSlice';
import styles from './SearchTrack.module.css'

const SearchTrack = () => {
    const [searchText, setSearchText] = useState("")
    const dispatch = useDispatch()
    // const handleChange = (e) => {
    //     let value = e.target.value;
    //     console.log(value); // Check if the value is being logged correctly
    //     setSearchText(value);
    //     console.log(data);
    // };

    const handleTrack = (id) => {
        console.log("clicked" + id);

        dispatch(currentTrackActions.addTrackId(id));
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const handleSearchDebounced = debounce((query) => {
            dispatch(SearchActions.changeSearchQuery(query));
        }, 500);

        handleSearchDebounced(searchText);
        return () => {
            handleSearchDebounced.cancel();
        };
    }, [searchText, dispatch]);


    return (
        <TextField
            autoFocus
            type='text'
            id="standard-bare"
            variant='standard'
            color="info"

            className={styles.searchTrackInput}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Track"
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <SearchOutlined className="darkModeIcon" />
                    </IconButton>
                ),
                style: {
                    color: "var(--text-color)",
                    marginLeft: "3em"
                },
            }}
        />
    )
}

export default SearchTrack