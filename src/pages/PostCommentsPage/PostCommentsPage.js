import React from 'react';

import {useParams} from "react-router-dom";

import {PostComments} from "../../components";



const PostCommentsPage = () => {
    const {postId} = useParams()
    return (
        <div>
            <PostComments postId={postId}/>
        </div>
    );
};

export {PostCommentsPage};