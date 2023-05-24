import * as React from 'react';
import CardUI from '../Card/CardUI';
import '../../assets/Styles/common.css'

export default function ShowCategory({ data }) {

    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <div className='cardMargin' onClick={() => handleClick(data.id)}>
            {console.log(data + "show")}
            <CardUI name={data.name} images={data.icons[0]} handleClick={handleClick} />
        </div>
    );
}