import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import signupReducer from "./slices/signupSlice"
import navSliceReducer from "./slices/navSlice";
export default configureStore({
    reducer:{
        user: userReducer,
        toggleSignups: signupReducer,
        navbar:navSliceReducer
    }
})