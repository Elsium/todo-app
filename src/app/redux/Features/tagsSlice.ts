import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TagsState {
    tags: Tag[]
}

export interface Tag {
    id: number
    name: string
}

const initialState: TagsState = {
    tags: []
}

const TagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addSticker: (state, action: PayloadAction<Tag>) => {
            state.tags.push(action.payload)
        },
        deleteSticker: (state, action: PayloadAction<number>) => {
            state.tags = state.tags.filter(tags => tags.id !== action.payload)
        },
    }
})

export const {addSticker, deleteSticker} = TagsSlice.actions

export default  TagsSlice.reducer