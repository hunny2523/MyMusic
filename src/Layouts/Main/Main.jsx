import React, { useRef } from 'react'
import '../../assets/Styles/common.css'
import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.css'
import ScrollToTopButton from '../ScrollToTop/ScrollToTop';
import routesData from '../../Routes/routes';

const Main = () => {
    const scrollableRef = useRef(null)
    // const currentTrack = useSelector((state) => state.currentTrack.trackID);

    return (
        <div className={`${styles.mainContainer}`} ref={scrollableRef}>

            <Routes>
                {routesData.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>

            <ScrollToTopButton scrollableRef={scrollableRef} />
        </div>
    )
}

export default Main