import * as React from 'react';
import CardUI from '../Card/CardUI';
import '../../assets/Styles/common.css'

export default function ShowAlbum({ data }) {

    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <div className='cardMargin'>
            <CardUI name={data.name} images={data.images[0]} handleClick={handleClick} artists={data.artists} />
        </div>
    );
}