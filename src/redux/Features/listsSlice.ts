import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '@/redux/store'
import {uploadListData} from '@/redux/Thunks/googleThunk'
import {removeListFromTodosAndUpload} from '@/redux/Features/todosSlice'

interface IListsState {
    lists: IList[]
}

export interface IList {
    id: number
    name: string
    color: string
}

export const addListAndUpload = createAsyncThunk(
    'lists/addListAndUpload',
    async ({name, color, accessToken}: {name: string, color: string, accessToken: string}, {getState, dispatch}) => {
        const newList: IList = {
            id: Date.now(),
            name,
            color
        }
        dispatch(addList(newList))

        const updatedLists = (getState() as RootState).listData.lists
        await dispatch(uploadListData({state: updatedLists, accessToken}))
    }
)

export const deleteListAndUpload = createAsyncThunk(
    'lists/deleteListAndUpload',
    async ({id, accessToken}: {id: number, accessToken: string}, {getState, dispatch}) => {
        dispatch(deleteList(id))

        dispatch(removeListFromTodosAndUpload({listId: id, accessToken}))
        const updatedLists = (getState() as RootState).listData.lists
        await dispatch(uploadListData({state: updatedLists, accessToken}))
    }
)

const initialState: IListsState = {
    lists: []
}

const ListsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<IList>) => {
            state.lists.push(action.payload)
        },
        deleteList: (state, action: PayloadAction<number>) => {
            state.lists = state.lists.filter(lists => lists.id !== action.payload)
        },
        loadLists: (state, action: PayloadAction<IList[]>) => {
            state.lists = action.payload
        }
    }
})

export const {addList, deleteList, loadLists} = ListsSlice.actions

export default  ListsSlice.reducer