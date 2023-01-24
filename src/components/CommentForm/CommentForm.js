import React from 'react';

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentValidator} from "../../validators";
import {commentsService} from "../../services";

const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(commentValidator)
    });

    const submit = async (comments) => {
        const {data} = await commentsService.create(comments)
        setComments(prev => [...prev, data])
        reset()
    }

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name',
            )}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'body'} {...register('body',)}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="text" placeholder={'email'} {...register('email')}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {
    CommentForm
};