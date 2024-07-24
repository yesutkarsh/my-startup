import { createSlice } from "@reduxjs/toolkit";
const navSlice = createSlice({
    name:"nav",
    initialState:{
        navbar:false,
        signup:false,
        whatToPrints:false
    },
    reducers:{
        toggleNav:(state,action)=>{
            state.navbar = !state.navbar
        },
        toggleSignup:(state, action)=>{
            state.signup = !state.signup
        },
        toggleWhatTOPrint:(state, action)=>{
            state.whatToPrints = !state.whatToPrints
        },

    }
})

export const {toggleNav,toggleSignup,toggleWhatTOPrint} = navSlice.actions
export default navSlice.reducer