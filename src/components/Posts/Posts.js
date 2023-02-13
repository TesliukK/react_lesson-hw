import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postService} from "../../services";
import {postAction} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();

    const {posts} = useSelector(state => state.posts);

    useEffect(() => {
        postService.getAll().then(({data}) => dispatch(postAction.getAll(data)))
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post} post={post}/>)}
        </div>
    );
}

export {Posts};