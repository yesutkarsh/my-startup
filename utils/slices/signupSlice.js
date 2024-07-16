import { createSlice } from "@reduxjs/toolkit";
const signupSlice = createSlice({
    name:"user",
    initialState:{
        showSignup:false
    },
    reducers:{
        toggleSignup:(state,action)=>{
            state.showSignup = !state.showSignup
        }
    }
})

export const { toggleSignup } = signupSlice.actions;
export default signupSlice.reducer;
