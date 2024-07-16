import { createSlice } from "@reduxjs/toolkit";

const showandHideSignup = createSlice({
    name:'showandHideSignup',
    initialState: {
        toggleSignup: false
    },
    reducers:{
        toggleTheSignup:(state, action)=>{
            state.toggleSignup = !state.toggleSignup
        }
    }
})

export const {toggleTheSignup}= showandHideSignup.actions
export default showandHideSignup.reducer