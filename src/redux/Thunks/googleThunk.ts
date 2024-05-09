import {createAsyncThunk} from '@reduxjs/toolkit'
import {uploadState} from '@/api/gdrive/upload'
import {getState} from '@/api/gdrive/get'
import {List, loadLists} from '@/redux/Features/listsSlice'
import {Tag, loadTags} from '@/redux/Features/tagsSlice'
import {Todo, loadTodos} from '@/redux/Features/todosSlice'
import {Sticker, loadStickers} from '@/redux/Features/stickersSlice'

export const uploadListData = createAsyncThunk(
    'data/uploadListData',
    async ({state, accessToken}: {state: List[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-lists.json', accessToken)
    }
)
export const uploadTagData = createAsyncThunk(
    'data/uploadTagData',
    async ({state, accessToken}: {state: Tag[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-tags.json', accessToken)
    }
)
export const uploadTodoData = createAsyncThunk(
    'data/uploadTodoData',
    async ({state, accessToken}: {state: Todo[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-todos.json', accessToken)
    }
)
export const uploadStickerData = createAsyncThunk(
    'data/uploadStickerData',
    async ({state, accessToken}: {state: Sticker[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-stickers.json', accessToken)
    }
)

export const getListData = createAsyncThunk(
    'data/getListData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-lists.json', accessToken})
        dispatch(loadLists(JSON.parse(data)))
    }
)
export const getTagData = createAsyncThunk(
    'data/getTagData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-tags.json', accessToken})
        dispatch(loadTags(JSON.parse(data)))
    }
)
export const getTodoData = createAsyncThunk(
    'data/getTodoData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-todos.json', accessToken})
        dispatch(loadTodos(JSON.parse(data)))
    }
)
export const getStickerData = createAsyncThunk(
    'data/getStickerData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-stickers.json', accessToken})
        dispatch(loadStickers(JSON.parse(data)))
    }
)

export const getAllData = createAsyncThunk(
    'data/getAllData',
    async(accessToken: string, {dispatch}) => {
        dispatch(getListData(accessToken))
        dispatch(getTagData(accessToken))
        dispatch(getTodoData(accessToken))
        dispatch(getStickerData(accessToken))
    }
)