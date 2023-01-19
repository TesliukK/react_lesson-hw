import React from 'react';
import User from "../User/User";

const Users = () => {
    let users = []

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => users=value)
    return (
        <div>
            {users.map(user => <User key = {user.id} user={user}/>)}
        </div>
    );
};

export default Users;