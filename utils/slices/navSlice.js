import { createSlice } from "@reduxjs/toolkit";
const navSlice = createSlice({
    name:"nav",
    initialState:{
        navbar:false,
        signup:false
    },
    reducers:{
        toggleNav:(state,action)=>{
            state.navbar = !state.navbar
        },
        toggleSignup:(state, action)=>{
            state.signup = !state.signup
        }
    }
})

export const {toggleNav,toggleSignup} = navSlice.actions
export default navSlice.reducer