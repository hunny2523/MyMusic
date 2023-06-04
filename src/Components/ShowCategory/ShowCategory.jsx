import * as React from 'react';
import CardUI from '../Card/CardUI';
import '../../assets/Styles/common.css'
import { useNavigate } from 'react-router';

export default function ShowCategory({ data }) {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/category/${id}`)
    }


    return (
        <div className='cardMargin' onClick={() => handleClick(data.id)}>
            <CardUI name={data.name} images={data.icons[0]} handleClick={handleClick} />
        </div>
    );
}