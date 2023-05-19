import { useState } from 'react';

const useAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        // Perform login logic here
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    };

    return {
        isLoggedIn,
        login,
        logout,
    };
};

export default useAuthentication;
