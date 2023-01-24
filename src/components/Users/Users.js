import React, {useEffect, useState} from 'react';
import {userServices} from "../../services";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAll().then(({data}) => setUsers(...data))
    }, [])

    return (
        <div>
            {users.map(user => <User key = {user.id} user = {user} />)}
        </div>
    );
};

export {
    Users
}