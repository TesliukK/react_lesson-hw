import React from 'react';

import "./style.css"

const Coment = ({user}) => {
    const {id, name, body, email, postId} = user

    return (
        <div className="userBlock">
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {
    Coment
};