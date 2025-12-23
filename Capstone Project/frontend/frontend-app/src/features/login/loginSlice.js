import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser } from "./authThunk";

const loginSlice = createSlice({
name: "auth",

initialState: {
    message:"",
    typeOfUser:"",
    emailId:""
},
reducers: {
    logout: (state) => {
    },
    resetAuth: (state) => {
    },
},

extraReducers: (builder) => {
    /* ===== SIGN UP ===== */
    builder
    .addCase(signUpUser.pending, (state) => {
        console.log("pending")
    })
    .addCase(signUpUser.fulfilled, (state,action) => {
        state.message = action.payload?.message;
         console.log("full filled")
        //console.log(action)
    })
    .addCase(signUpUser.rejected, (state, action) => {
        //console.log("rejected")
        //console.log(action)
        state.message="Error generated"
    });

    /* ===== SIGN IN ===== */
    /** Keep the track about the promise object */
    builder
    .addCase(signInUser.pending, (state) => {
        
    })
    .addCase(signInUser.fulfilled, (state, action) => {
        console.log(action.payload.user)
        state.message = action.payload?.message;
        state.typeOfUser=action.payload.user.typeOfUser;
        state.emailId = action.payload.user.emailId;
    })
    .addCase(signInUser.rejected, (state, action) => {
        state.message=action.payload
    });
},
});

export const { logout, resetAuth } = loginSlice.actions;
export default loginSlice.reducer;
