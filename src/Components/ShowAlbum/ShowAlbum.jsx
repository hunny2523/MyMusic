import * as React from 'react';
import CardUI from '../Card/CardUI';
import '../../assets/Styles/common.css'
import { useNavigate } from 'react-router-dom';

export default function ShowAlbum({ data }) {

    const navigate = useNavigate()

    const handleClick = (id) => {
        console.log("hello");
        navigate(`/album/${id}`)
    }

    return (
        <div className='cardMargin' onClick={() => handleClick(data.id)}>
            <CardUI name={data.name} images={data.images[0]} handleClick={handleClick} artists={data.artists} />
        </div>
    );
}