import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '@/redux/store'
import {uploadListData} from '@/redux/Thunks/googleThunk'

interface ListsState {
    lists: List[]
}

export interface List {
    id: number
    name: string
    color: string
}

export const addListAndUpload = createAsyncThunk(
    'lists/addListAndUpload',
    async ({name, color, accessToken}: {name: string, color: string, accessToken: string}, {getState, dispatch}) => {
        const newList: List = {
            id: Date.now(),
            name,
            color
        }

        dispatch(addList(newList))

        const updatedLists = (getState() as RootState).listData.lists

        await dispatch(uploadListData({state: updatedLists, accessToken}))

        return newList
    }
)

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
        loadLists: (state, action: PayloadAction<List[]>) => {
            state.lists = action.payload
        }
    }
})

export const {addList, deleteList, loadLists} = ListsSlice.actions

export default  ListsSlice.reducer