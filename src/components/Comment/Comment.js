import React from 'react';

import {useNavigate} from "react-router-dom";

import css from './style.module.css'

const Comment = ({comment}) => {

    const nav = useNavigate()
    const {id, postId, name, email, body} = comment;

    return (
        <div className={css.block}>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => nav(postId.toString())}>Get Post</button>
        </div>
    );
};

export {Comment};