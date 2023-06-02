import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Headings from '../Headings/Headings';
import ShowPlaylist from '../ShowPlaylist/ShowPlaylist';
import ShowCategory from '../ShowCategory/ShowCategory';

const Categories = ({ atHomePage }) => {
    const categories = useSelector(state => state.browse.categories);
    return (
        <Fragment  >

            {categories && (
                <>
                    <Headings heading={"Pick Something Up"} to="/allCategories" atHomePage={atHomePage} />
                    <div className={atHomePage ? 'CardHorizontalContainer' : 'verticalCardWrapper'}>
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
