import React, {useEffect, useState} from 'react';

import {Outlet} from "react-router-dom";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

import css from './style.module.css'


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, [])
    return (
        <div>
            <div className={css.cont}>{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
            <Outlet/>
        </div>


    );
};

export {Comments};