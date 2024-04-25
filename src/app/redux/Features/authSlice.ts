import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    token: string | null
}

const initialState: AuthState = {
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInSuccess: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token
        },
    },
})

export const { signInSuccess } = authSlice.actions
export default authSlice.reducer