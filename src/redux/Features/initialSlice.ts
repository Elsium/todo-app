import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState {
    isInitial: boolean
}

const initialState: IInitialState = {
    isInitial: false
}

const initialSlice = createSlice({
    name: 'initial',
    initialState,
    reducers: {
        initialSuccess: (state, action: PayloadAction<boolean>) => {
            state.isInitial = action.payload
        }
    }
})

export const {initialSuccess} = initialSlice.actions
export default initialSlice.reducer