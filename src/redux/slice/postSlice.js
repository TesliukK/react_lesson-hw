import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    errors: null,
    loading: null
};

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.posts = action.payload
        }
    }
});

const {reducer: postReducer, actions: {getAll}} = postSlice;

const postAction = {
    getAll
}

export {
    postReducer,
    postAction
}