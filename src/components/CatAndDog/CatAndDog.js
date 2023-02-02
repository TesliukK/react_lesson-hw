import React, {useReducer} from 'react';

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {validators} from "../../validators";

const CatAndDog = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'cats':
                return {...state, cats: state.cats}
            case 'DEC1':
                return {...state, count1: state.count1 - 1}
            case 'INC2':
                return {...state, count2: state.count2 + 1}
            case 'DEC2':
                return {...state, count2: state.count2 - 1}
            case 'RESET':
                return {count1: action.payload, count2: action.payload}
            default:
                return {...state}
        }
    };

    const initValue = () => (
        {cats: [], dogs: []}
    );

    const [state, dispatch] = useReducer(reducer, null, initValue);

    const UserForm = () => {
        const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
            mode: 'all',
            resolver: joiResolver(validators)
        });
        const submit = async () => {
            const {data} = await create(c)
            setUsers(prev => [...prev, data])
            reset()
        }


        return (
            <div>
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'name'} {...register('name',
                    )}/>
                    {errors.name && <span>{errors.name.message}</span>}

                    <input type="text" placeholder={'username'} {...register('username',)}/>
                    {errors.username && <span>{errors.username.message}</span>}

                    <input type="text" placeholder={'email'} {...register('email')}/>
                    <button disabled={!isValid}>Save</button>
                </form>
                );
                };

                export {CatAndDog};