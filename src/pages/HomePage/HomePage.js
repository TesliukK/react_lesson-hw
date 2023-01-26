import React from 'react';

import css from './home.module.css';

const HomePage = () => {
    return (
        <div className={css.home}>
            <img src="https://t4.ftcdn.net/jpg/03/61/52/11/360_F_361521131_tvclR3GrsVQBFVsUe1EPNFgH2MWIN1w7.jpg"
                 alt="welcome"/>
        </div>
    );
};

export {HomePage};