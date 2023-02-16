import React from 'react';
import {useDispatch} from "react-redux";

import css from './car.module.css';
import {carAction} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const {id, brand, price, year} = car;

    return (
        <div className={css.block}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carAction.setCarForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carAction.deleteById({id}))}>delete</button>
        </div>
    );
};

export {Car};