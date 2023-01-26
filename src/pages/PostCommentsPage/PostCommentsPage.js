import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";

import {postService} from "../../services";
import css from './style.module.css'


const PostCommentsPage = () => {

    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId) {
            postService.getPostById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])

    if (!post) return null;

    return (
        <div className={css.block}>
            <div>PostID: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>
        </div>

    );
};

export {PostCommentsPage};