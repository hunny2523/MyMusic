import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Headings from '../Headings/Headings';
import ShowAlbum from '../ShowAlbum/ShowAlbum';

const NewReleases = () => {
    const newReleases = useSelector(state => state.browse.newReleases);
    return (
        <Fragment  >
            {newReleases && (
                <>
                    {console.log(newReleases)}
                    <Headings heading={"New Releases"} />
                    <div className='CardHorizontalContainer'>
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
