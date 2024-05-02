import {createAsyncThunk} from '@reduxjs/toolkit'
import {uploadState} from '@/app/api/gdrive/upload'
import {getState} from '@/app/api/gdrive/get'
import {List, loadLists} from '@/app/redux/Features/listsSlice'
import {Tag, loadTags} from '@/app/redux/Features/tagsSlice'
import {Todo, loadTodos} from '@/app/redux/Features/todosSlice'
import {Sticker, loadStickers} from '@/app/redux/Features/stickersSlice'

export const uploadListData = createAsyncThunk(
    'data/uploadData',
    async ({state, accessToken}: {state: List[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-lists.json', accessToken)
    }
)
export const uploadTagData = createAsyncThunk(
    'data/uploadData',
    async ({state, accessToken}: {state: Tag[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-tags.json', accessToken)
    }
)
export const uploadTodoData = createAsyncThunk(
    'data/uploadData',
    async ({state, accessToken}: {state: Todo[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-todos.json', accessToken)
    }
)
export const uploadStickerData = createAsyncThunk(
    'data/uploadData',
    async ({state, accessToken}: {state: Sticker[], accessToken: string}) => {
        await uploadState(state, 'TaskZen-stickers.json', accessToken)
    }
)

export const fetchAndSetData = createAsyncThunk(
    'data/fetchAndSetDataFromGoogleDrive',
    async ({accessToken}: {accessToken: string}, {dispatch}) => {
        const data = await getState(accessToken)
        dispatch(loadLists(data.lists))
        dispatch(loadTags(data.tags))
        dispatch(loadTodos(data.todos))
        dispatch(loadStickers(data.stickers))
    }
)