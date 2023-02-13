import React from 'react';
import {useSelector} from "react-redux";

import css from './header.module.css'
const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    return (
        <div className={css.head}>
            {selectedUser && selectedUser.name}
        </div>
    );
};

export {Header};