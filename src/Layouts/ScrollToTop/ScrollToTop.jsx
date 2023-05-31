import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css'
import { ArrowCircleUp, ArrowUpward } from '@mui/icons-material';

const ScrollToTopButton = ({ scrollableRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = scrollableRef.current.scrollTop;
        console.log(scrollTop > 200);
        setIsVisible(scrollTop > 200); // Show the button when scroll position is greater than 200p
    };
    useEffect(() => {

        scrollableRef.current.addEventListener('scroll', handleScroll);

        return () => {
            scrollableRef.current.removeEventListener('scroll', handleScroll);
        };
    }, [scrollableRef]);

    const scrollToTop = () => {
        scrollableRef.current.scrollTo({
            top: 0,
            behavior: 'smooth', // Enable smooth scrolling behavior
        });
    };

    return (
        <div className={`${styles.scroll_to_top_button} ${isVisible ? `${styles.visible}` : ''}`} onClick={scrollToTop}>
            <ArrowUpward fontSize='large' />
        </div>
    );
};

export default ScrollToTopButton;
