import React from 'react';

import css from './user.module.css';

const User = ({user}) => {
    const {id, email, name, username} = user;

    return (
        <div className={css.block}>
            <div>Id: {id}</div>
            <div>Email: {email}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
        </div>
    );
};

export {User};