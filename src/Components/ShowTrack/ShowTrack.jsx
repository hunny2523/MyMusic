import { Avatar } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import styles from './ShowTrack.module.css'
import { FavoriteBorder, FavoriteOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
const ShowTrack = ({ data, handleTrack }) => {


    return (
        <div className={styles.trackRowContainer} onClick={() => handleTrack(data.id)}>
            <div className='d-flex-row' style={{ flex: 2 }}>

                <Avatar alt={data.name} src={data?.album?.images[0]?.url} />
                <div className={styles.TextWrapper}>

                    <h5 className={styles.trackName}>{data.name}</h5>

                    <div >
                        {data.artists.map((artist) => {
                            return (
                                <Fragment key={artist.id}>
                                    <span className={styles.artistName} >{artist.name} </span>
                                </Fragment>
                            )
                        })}
                    </div>


                </div>
            </div>

            <div className={styles.TimeHeartWrapper}>

                <p >{data.duration_ms} </p>
                <FavoriteBorder />

            </div>
        </div>
    )
}

export default ShowTrack
