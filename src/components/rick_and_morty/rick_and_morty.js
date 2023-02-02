import React from 'react';

import './style.css'
const RickAndMorty = (props) => {
    let {id, name, status,species,gender,image} = props
    return (
        <div className="block">
            <h3>{id}: {name}</h3>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt={'img'}/>
        </div>
    );
};

export default RickAndMorty;