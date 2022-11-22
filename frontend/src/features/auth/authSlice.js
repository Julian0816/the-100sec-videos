import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Get user from LocalStorage

const user = JSON.parse(localStorage.getItem('user'))



const initialState = {
    user: user ? user : null,
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        } //We use this function to reset the values back to false
    },
    extraReducers: () => {

    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer