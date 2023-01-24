import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator";
import {userServices} from "../../services";

const UserForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const submit = async (user) => {
        const {data} = await userServices.create(user)
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
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

export {
    UserForm
};