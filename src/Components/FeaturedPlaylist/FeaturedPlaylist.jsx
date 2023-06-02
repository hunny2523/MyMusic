import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Headings from '../Headings/Headings';
import ShowPlaylist from '../ShowPlaylist/ShowPlaylist';

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
                                return <ShowPlaylist key={playlist.id} data={playlist} />
                            }
                        })}
                    </div>

                </>
            )}

        </Fragment >
    )
}

export default FeaturedPlaylist
