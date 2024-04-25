import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListsState {
    lists: List[]
}

export interface List {
    id: number
    name: string
}

const initialState: ListsState = {
    lists: []
}

const ListsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<List>) => {
            state.lists.push(action.payload)
        },
        deleteList: (state, action: PayloadAction<number>) => {
            state.lists = state.lists.filter(lists => lists.id !== action.payload)
        },
    }
})

export const {addList, deleteList} = ListsSlice.actions

export default  ListsSlice.reducer