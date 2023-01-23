import React from 'react';

import '..//style.css'

const User = ({user, setUserDetails}) => {

    const {id,name,username,email} = user

    return (
        <div className="block">
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button className="btn" onClick={()=>setUserDetails(user)}>Details</button>
        </div>
    );
};

export default User;