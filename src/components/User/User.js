import React from 'react';

import css from './user.module.css';
import {useDispatch} from "react-redux";
import {userAction} from "../../redux";

const User = ({user}) => {
    const {id, email, name, username} = user;

    const dispatch = useDispatch()

    return (
        <div className={css.block}>
            <div>Id: {id}</div>
            <div>Email: {email}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <button className={css.btn} onClick={()=>dispatch(userAction.setSelectedUser(user))}>click</button>
            <button className={css.btn} onClick={()=>dispatch(userAction.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {User};