import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const useAuthentication = () => {
    const isLoggedIn = useSelector((state) => state.auth.accessToken) ? true : false
    const dispatch = useDispatch();


    const logout = () => {
        // Perform logout logic here
    };

    return {
        isLoggedIn,
        // login,
        logout,
    };
};

export default useAuthentication;
