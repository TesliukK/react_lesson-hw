import React from 'react';

import {Link} from "react-router-dom";

import css from './style.module.css'

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    return (
        <div className={css.block}>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <Link to={id.toString()}>Post comments</Link>
        </div>
    );
};

export {Comment};