import {createAsyncThunk} from '@reduxjs/toolkit'
import {getAll} from '@/app/api/getAll'
import {loadLists} from '@/app/redux/Features/listsSlice'
import {loadTags} from '@/app/redux/Features/tagsSlice'
import {loadTodos} from '@/app/redux/Features/todosSlice'
import {loadStickers} from '@/app/redux/Features/stickersSlice'

export const fetchAndSetData = createAsyncThunk(
    'data/fetchAndSetData',
    async (_, {dispatch}) => {
        const data = await getAll()
        dispatch(loadLists(data.lists))
        dispatch(loadTags(data.tags))
        dispatch(loadTodos(data.todos))
        dispatch(loadStickers(data.stickers))
    }
)