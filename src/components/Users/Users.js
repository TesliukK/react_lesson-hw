import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {userService} from "../../services/userService";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [userDetails, setUserDetails] = useState(null)
    useEffect(() => {
        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]))
    }, [count])


    return (
        <div>
            <h1>UserDetails</h1>
            {userDetails && <div>
                <ul>
                    <li>id: {userDetails.id}</li>
                    <li>name: {userDetails.name}</li>
                    <li>username: {userDetails.username}</li>
                    <li>email: {userDetails.email}</li>
                    <li>address,street: {userDetails.address.street}</li>
                    <li>address,suite: {userDetails.address.suite}</li>
                    <li>address,city: {userDetails.address.city}</li>
                    <li>address,zipcode: {userDetails.address.zipcode}</li>
                </ul>
            </div>}
            <hr/>
            <h1>Users: </h1>
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};

export default Users;