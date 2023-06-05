import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Headings from '../Headings/Headings';
import ShowData from '../showData/ShowData';

const FeaturedPlaylist = ({ atHomePage }) => {
    const featuredPlaylists = useSelector(state => state.browse.featuredPlaylists);
    return (
        <Fragment  >

            {featuredPlaylists && (
                <>
                    <Headings heading={featuredPlaylists?.message} to="/FeatuedPlaylists" atHomePage={atHomePage} />
                    <div className={atHomePage ? 'CardHorizontalContainer' : 'verticalCardWrapper'} >
                        {featuredPlaylists?.playlists?.items.map((playlist) => {
                            if (playlist?.type === "playlist") {
                                return <ShowData key={playlist.id} data={playlist} type="playlist" />
                            }
                        })}
                    </div>

                </>
            )}

        </Fragment >
    )
}

export default FeaturedPlaylist
