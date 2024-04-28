import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    email?: string | null | undefined
    image?: string | null | undefined
    name?: string | null | undefined
}

interface AuthState {
    user: User | null
    isAuth: boolean
}

const initialState: AuthState = {
    user: null,
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInSuccess: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.isAuth = true
        },
    },
})

export const { signInSuccess } = authSlice.actions
export default authSlice.reducer