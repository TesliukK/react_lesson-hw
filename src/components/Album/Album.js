import React from 'react';

import css from './style.module.css'

const Album = ({album}) => {
    const {id, userId, title} = album;

    return (
        <div className={css.block}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};