import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services";

const PostComments = ({postId}) => {
    const [comment, setComment] = useState(null)

    useEffect(() => {
        commentsService.getById(postId).then(({data}) => setComment(data))
    })
    return (
        <div>
            {comment &&
                <>
                    <div>id: {comment.id}</div>
                    <div>postId: {comment.postId}</div>
                    <div>body: {comment.body}</div>
                </>
            }
        </div>
    );
};

export {PostComments};