import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Headings from '../Headings/Headings';
import ShowAlbum from '../ShowAlbum/ShowAlbum';

const NewReleases = ({ atHomePage }) => {
    const newReleases = useSelector(state => state.browse.newReleases);
    return (
        <Fragment  >
            {newReleases && (
                <>
                    <Headings heading={"New Releases"} to="/NewReleases" atHomePage={atHomePage} />
                    <div className={atHomePage ? 'CardHorizontalContainer' : 'verticalCardWrapper'} >
                        {newReleases?.items?.map((album) => {
                            if (album.type === "album") {
                                return <ShowAlbum key={album.id} data={album} />
                            }
                        })}
                    </div>

                </>
            )}
        </Fragment >
    )
}

export default NewReleases
