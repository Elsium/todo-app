import {createAsyncThunk, PayloadAction, ThunkDispatch} from '@reduxjs/toolkit'
import {uploadState} from '@/api/gdrive/upload'
import {getState} from '@/api/gdrive/get'
import {IList, loadLists} from '@/redux/Features/listsSlice'
import {ITag, loadTags} from '@/redux/Features/tagsSlice'
import {ITodo, loadTodos} from '@/redux/Features/todosSlice'
import {ISticker, loadStickers} from '@/redux/Features/stickersSlice'
import {initialSuccess} from '@/redux/Features/initialSlice'

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

const _loadToState = (data: string | ITodo | IList | ISticker | ITag | null, action: any, dispatch: ThunkDispatch<any, any, any>) => {
    if (data === null) return
    if (typeof data === 'string') {
        dispatch(action(JSON.parse(data)))
        return
    }
    dispatch(action(data))
}

export const getListData = createAsyncThunk(
    'data/getListData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-lists.json', accessToken})
        _loadToState(data, loadLists, dispatch)
    }
)
export const getTagData = createAsyncThunk(
    'data/getTagData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-tags.json', accessToken})
        _loadToState(data, loadTags, dispatch)
    }
)
export const getTodoData = createAsyncThunk(
    'data/getTodoData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-todos.json', accessToken})
        _loadToState(data, loadTodos, dispatch)
    }
)
export const getStickerData = createAsyncThunk(
    'data/getStickerData',
    async (accessToken: string, {dispatch}) => {
        const data = await getState({filename: 'TaskZen-stickers.json', accessToken})
        _loadToState(data, loadStickers, dispatch)
    }
)

export const getAllData = createAsyncThunk(
    'data/getAllData',
    async(accessToken: string, {dispatch}) => {
        await dispatch(getListData(accessToken))
        await dispatch(getTagData(accessToken))
        await dispatch(getTodoData(accessToken))
        await dispatch(getStickerData(accessToken))
        dispatch(initialSuccess(true))
    }
)