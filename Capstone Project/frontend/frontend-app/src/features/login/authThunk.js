import { createAsyncThunk } from "@reduxjs/toolkit";
import {signIn,signUp} from '../../service/login.service'



export const signUpUser = createAsyncThunk("auth/signup",
async (userData, { rejectWithValue }) => {
    try {
    const response = await signUp(userData);
    return response.data;
    } catch (error) {
    return rejectWithValue(
        error
    );
    }
}
);

export const signInUser = createAsyncThunk("auth/signin",
async (loginData, { rejectWithValue }) => {
    try {
    const response = await signIn(loginData);
    return response.data;
    } catch (error) {
    return rejectWithValue(
        error.message
    );
    }
}
);
