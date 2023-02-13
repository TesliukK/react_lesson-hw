import React from 'react';
import {useDispatch} from "react-redux";

import {postAction} from "../../redux";
import css from "../User/user.module.css";

const Post = ({post}) => {
    const {id, userId, title, body} = post;

    const dispatch = useDispatch();

    return (
        <div className={css.block}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button className={css.btn} onClick={()=>dispatch(postAction.setSelectedPost(post))}>select</button>
            <button className={css.btn} onClick={() => dispatch(postAction.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {Post};