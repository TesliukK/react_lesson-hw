import React from 'react';

import css from './header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
            <div>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export {Header};