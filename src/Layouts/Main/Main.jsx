import React, { Suspense, useMemo, useRef } from 'react'
import '../../assets/Styles/common.css'
import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.css'
import ScrollToTopButton from '../ScrollToTop/ScrollToTop';
import routesData from '../../Routes/routes';
import { DotLoader } from 'react-spinners';

const Main = () => {
    const scrollableRef = useRef(null)



    return (
        <div className={`${styles.mainContainer}`} ref={scrollableRef}>
            <Suspense fallback={<DotLoader className="loading-component" color='orange' />}>
                <Routes>
                    {routesData.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </Suspense>
            <ScrollToTopButton scrollableRef={scrollableRef} />
        </div>
    )
}

export default Main