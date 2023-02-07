import {useReducer, useRef} from "react";

import {Dogs} from "./components";
import {Cats} from "./components";

import css from './App.module.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: action.cats}]}

        case 'deleteCat':
            const index = state.cats.findIndex(cat => action.cats);
            state.cats.splice(index, 1)
            return {...state}

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: action.dogs}]}

        case 'deleteDog':
            const indexDog = state.dogs.findIndex(dog => action.dogs);
            state.dogs.splice(indexDog, 1)
            return {...state}

        default:
            return {...state}
    }
}
const App = () => {
    const catInput = useRef();
    const dogInput = useRef();
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const createCat = () => {
        dispatch({type: 'addCat',})
        catInput.current.value = ''
    };

    const createDog = () => {
        dispatch({type: 'addDog'})
        dogInput.current.value = ''
    }
    return (
        <div className={css.App}>
            <div className={css.block}>
                <input className={css.cat} type="text" ref={catInput}/>
                <button className={css.btn} onClick={createCat}>Create Cat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div className={css.block}>
                <input className={css.dog} type="text" ref={dogInput}/>
                <button className={css.btn} onClick={createDog}>Create Dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export {App};
