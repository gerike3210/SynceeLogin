import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isValid: false, loggedInEmail: "", userObj: "" },
    reducers: {
        validLogIn(state, action) {
            state.isValid = true;
            state.loggedInEmail = action.payload;
        },
        changeUserObj(state, action) {
            state.userObj = action.payload;
        },
    },
});

const store = configureStore({
    reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;
