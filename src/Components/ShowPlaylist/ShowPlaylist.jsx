import * as React from 'react';
import CardUI from '../Card/CardUI';
import '../../assets/Styles/common.css'

export default function ShowPlaylist({ data }) {

    const handleClick = (id) => {
        console.log(data.id);
    }

    return (
        <div className='cardMargin'>
            <CardUI name={data.name} description={data.description} images={data.images[0]} handleClick={handleClick} type={data.type} />
        </div>
    );
}