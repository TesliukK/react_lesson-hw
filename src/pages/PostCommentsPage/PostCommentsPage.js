import React from 'react';

import {useParams} from "react-router-dom";

import {PostDetails} from "../../components";



const PostCommentsPage = () => {
    const {postId} = useParams()
    return (
        <div>
            <PostDetails postId={postId}/>
        </div>
    );
};

export {PostCommentsPage};