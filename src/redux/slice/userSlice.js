import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    error: null,
    loading: null
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        }
    }
});

const {reducer: userReducer, action: {getAll}} = userSlice;

const userAction = {
    getAll
}

export {
    userReducer,
    userAction
}