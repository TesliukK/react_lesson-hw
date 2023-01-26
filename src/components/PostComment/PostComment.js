import React from 'react';

const PostComment = ({posts}) => {
    const {id, userId, title, body} = posts
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostComment};