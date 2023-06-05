import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardUI from '../Card/CardUI'

const ShowArtists = ({ data }) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/artist/${id}`)
    }
    return (
        <div className='cardMargin' onClick={() => handleClick(data.id)}>
            <CardUI name={data.name} images={data.images[0]} artistCard={true} />
        </div>
    )
}

export default ShowArtists


