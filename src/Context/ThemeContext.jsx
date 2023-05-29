import React, { createContext, useState } from 'react';

// Create a new context for the theme
export const ThemeContext = createContext();

// Create a ThemeProvider component to provide the theme value
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
