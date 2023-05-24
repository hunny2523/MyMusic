import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Headings from '../Headings/Headings';
import ShowPlaylist from '../ShowPlaylist/ShowPlaylist';
import ShowCategory from '../ShowCategory/ShowCategory';

const Categories = () => {
    const categories = useSelector(state => state.browse.categories);
    return (
        <Fragment  >

            {categories && (
                <>
                    <Headings heading={"Pick Something Up"} />
                    <div className='CardHorizontalContainer'>
                        {categories?.items?.map((category) => {
                            return <ShowCategory key={category.id} data={category} />
                        })}
                    </div>

                </>
            )}

        </Fragment >
    )
}

export default Categories
