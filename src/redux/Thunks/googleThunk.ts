import {createAsyncThunk} from '@reduxjs/toolkit'
import {uploadState} from '@/api/gdrive/upload'
import {getState} from '@/api/gdrive/get'
import {IList, loadLists} from '@/redux/Features/listsSlice'
import {ITag, loadTags} from '@/redux/Features/tagsSlice'
import {ITodo, loadTodos} from '@/redux/Features/todosSlice'
import {ISticker, loadStickers} from '@/redux/Features/stickersSlice'

export const uploadListData = createAsyncThunk(
    'data/uploadListData',
    async ({state, accessToken}: {state: IList[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-lists.json', accessToken)
    }
)
export const uploadTagData = createAsyncThunk(
    'data/uploadTagData',
    async ({state, accessToken}: {state: ITag[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-tags.json', accessToken)
    }
)
export const uploadTodoData = createAsyncThunk(
    'data/uploadTodoData',
    async ({state, accessToken}: {state: ITodo[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-todos.json', accessToken)
    }
)
export const uploadStickerData = createAsyncThunk(
    'data/uploadStickerData',
    async ({state, accessToken}: {state: ISticker[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-stickers.json', accessToken)
    }
)

export const getListData = createAsyncThunk(
    'data/getListData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-lists.json', accessToken})
        if(data === null) return
        if(typeof data === 'string') {
            dispatch(loadLists(JSON.parse(data)))
            return
        }
        dispatch(loadLists(data))
    }
)
export const getTagData = createAsyncThunk(
    'data/getTagData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-tags.json', accessToken})
        if(data === null) return
        if(typeof data === 'string') {
            dispatch(loadTags(JSON.parse(data)))
            return
        }
        dispatch(loadTags(data))
    }
)
export const getTodoData = createAsyncThunk(
    'data/getTodoData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-todos.json', accessToken})
        if(data === null) return
        if(typeof data === 'string') {
            dispatch(loadTodos(JSON.parse(data)))
            return
        }
        dispatch(loadTodos(data))
    }
)
export const getStickerData = createAsyncThunk(
    'data/getStickerData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-stickers.json', accessToken})
        if(data === null) return
        if(typeof data === 'string') {
            dispatch(loadStickers(JSON.parse(data)))
            return
        }
        dispatch(loadStickers(data))
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