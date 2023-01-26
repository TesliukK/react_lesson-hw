import React, {useEffect, useState} from 'react';

import {postService} from "../../services";
import {PostComment} from "../PostComment/PostComment";

const PostComments = ({postId}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPosts(data))
    })
    return (
        <div>
            {posts.map(post=><PostComment key={post.id} post={post}/>) &&
                <>
                    <div>id: {posts.id}</div>
                    <div>postId: {posts.postId}</div>
                    <div>body: {posts.body}</div>
                </>
            }
        </div>
    );
};

export {PostComments};