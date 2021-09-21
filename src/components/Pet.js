import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Pet(props) {
    const { age, breed, description, id, location, name, sex, url } = props.pet;
    const { push } = useHistory();

    const handleClick = () => {
        push(`/pets/${id}`)
    };

    return (
        <div className='pet-card' onClick={handleClick}>
            <div><img src={url} alt='pet' style={{width: '200px', height: '200px'}}/></div>
            <div>
                <h3>{name}</h3>
                <div>{sex}, {age}</div>
                <div>{location}</div>
            </div>
        </div>
    )
};