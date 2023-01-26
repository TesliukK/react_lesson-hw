import React, {useEffect, useState} from 'react';

import {postService} from "../../services";

const PostDetails = ({postId}) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPosts(data))
    })
    return (
        <div>
            {posts &&
                <>
                    <div>id: {posts.id}</div>
                    <div>postId: {posts.postId}</div>
                    <div>body: {posts.body}</div>
                </>
            }
        </div>
    );
};

export {PostDetails};