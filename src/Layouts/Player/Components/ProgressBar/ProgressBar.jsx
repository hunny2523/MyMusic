import React, { useEffect, useState } from 'react';
import { audioElement } from '../../../../App';
import styles from './ProgressBar.module.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {

            const currentTime = audioElement.currentTime;
            const calculatedProgress = (currentTime / 30) * 100
            //     clearInterval(interval);
            setProgress(calculatedProgress)
            // }
        }, 100); // Update progress every second

        return () => {
            clearInterval(interval); // Clear the interval on component unmount
        };
    }, []);

    return (
        <div className={styles.progressBar}>
            <progress value={progress} max={100}></progress>
        </div>
    );
};

export default ProgressBar;
