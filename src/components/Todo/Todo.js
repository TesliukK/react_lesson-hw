import React from 'react';

import css from './style.module.css'
const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;
    return (
        <div className={css.block}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>
        </div>
    );
};

export {Todo};