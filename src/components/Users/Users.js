import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../../services/userService";
import '../style.css'

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
            {userDetails && <div className="liBlock">
                <ul>
                    <li>id: {userDetails.id}</li>
                    <li>name: {userDetails.name}</li>
                    <li>username: {userDetails.username}</li>
                    <li>email: {userDetails.email}</li>
                    <li>address,street: {userDetails.address.street}</li>
                    <li>address,suite: {userDetails.address.suite}</li>
                    <li>address,city: {userDetails.address.city}</li>
                    <li>address,zipcode: {userDetails.address.zipcode}</li>
                    <li>address,zipcode,geo,lat: {userDetails.address.geo.lat}</li>
                    <li>address,zipcode,geo,lng: {userDetails.address.geo.lng}</li>
                    <li>phone: {userDetails.phone}</li>
                    <li>website: {userDetails.website}</li>
                    <li>company,name: {userDetails.company.name}</li>
                    <li>company,catchPhrase: {userDetails.company.catchPhrase}</li>
                    <li>company,bs: {userDetails.company.bs}</li>
                </ul>
            </div>}
            <h1>Users: </h1>
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};

export default Users;