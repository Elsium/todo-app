import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IUser {
    email?: string | null | undefined
    image?: string | null | undefined
    name?: string | null | undefined
}

interface IAuthState {
    user: IUser | null
    isAuth: boolean
}

const initialState: IAuthState = {
    user: null,
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInSuccess: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
        }
    },
})

export const {signInSuccess} = authSlice.actions
export default authSlice.reducer