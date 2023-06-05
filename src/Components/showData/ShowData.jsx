import * as React from 'react';
import CardUI from '../Card/CardUI';
import '../../assets/Styles/common.css'
import { useNavigate } from 'react-router';

export default function ShowData({ data, type }) {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/${type}/${id}`)
    }


    return (
        <div className='cardMargin' onClick={() => handleClick(data.id)}>
            <CardUI name={data.name} images={type == "category" ? data.icons[0] : data.images[0]} />
        </div>
    );
}