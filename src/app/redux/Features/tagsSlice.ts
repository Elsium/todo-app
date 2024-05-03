import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '@/app/redux/store'
import {uploadTagData} from '@/app/redux/Thunks/googleThunk'

interface TagsState {
    tags: Tag[]
}

export interface Tag {
    id: number
    name: string
    color: string
}

export const addTagAndUpload = createAsyncThunk(
    'tags/addTagAndUpload',
    async ({name, color, accessToken}: {name: string, color: string, accessToken: string}, {getState, dispatch}) => {
        const newTag: Tag = {
            id: Date.now(),
            name,
            color
        }

        dispatch(addTag(newTag))

        const updatedTags = (getState() as RootState).tagData.tags

        await dispatch(uploadTagData({state: updatedTags, accessToken}))

        return newTag
    }
)

const initialState: TagsState = {
    tags: []
}

const TagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag: (state, action: PayloadAction<Tag>) => {
            state.tags.push(action.payload)
        },
        deleteTag: (state, action: PayloadAction<number>) => {
            state.tags = state.tags.filter(tags => tags.id !== action.payload)
        },
        loadTags: (state, action: PayloadAction<Tag[]>) => {
            state.tags = action.payload
        }
    }
})

export const {addTag, deleteTag, loadTags} = TagsSlice.actions

export default  TagsSlice.reducer