import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userAction} from "../../redux";
import {User} from "../User/User";
// import {userService} from "../../services";

const Users = () => {
    const dispatch = useDispatch();

    const {users, error, loading} = useSelector(state => state.users);

    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userAction.getAll(data)))
        dispatch(userAction.getAll())
    }, []);

    return (
        <div>
            {error && JSON.stringify(error)}
            {loading && <h1>loading</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};