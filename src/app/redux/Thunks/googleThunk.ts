import {createAsyncThunk} from '@reduxjs/toolkit'
import {uploadState} from '@/app/api/gdrive/upload'
import {getState} from '@/app/api/gdrive/get'
import {loadLists} from '@/app/redux/Features/listsSlice'
import {loadTags} from '@/app/redux/Features/tagsSlice'
import {loadTodos} from '@/app/redux/Features/todosSlice'
import {loadStickers} from '@/app/redux/Features/stickersSlice'
import {RootState} from '@/app/redux/store'

export const uploadData = createAsyncThunk(
    'data/uploadData',
    async ({state, accessToken}: {state: RootState, accessToken: string}) => {
        await uploadState(state, accessToken)
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