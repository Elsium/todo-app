import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TagsState {
    tags: Tag[]
}

export interface Tag {
    id: number
    name: string
    color: string
}

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
    }
})

export const {addTag, deleteTag} = TagsSlice.actions

export default  TagsSlice.reducer