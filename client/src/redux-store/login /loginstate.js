import { createSlice } from "@reduxjs/toolkit";

export const loginstate = createSlice({
    name:"loginstate",
    initialState:{value:false},
    reducers:{
        login: (state)=>{
            state.value = true;

        },
        logout: (state)=>{
            state.value = false;
        }
    }

})

export const {login,logout} =loginstate.actions;