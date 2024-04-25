import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StickersState {
    stickers: Sticker[]
}

interface Sticker {
    id: number
    title: string
    description: string | null
}

const initialState: StickersState = {
    stickers: []
}

const StickersSlice = createSlice({
    name: 'stickers',
    initialState,
    reducers: {
        addSticker: (state, action: PayloadAction<Sticker>) => {
            state.stickers.push(action.payload)
        },
        deleteSticker: (state, action: PayloadAction<number>) => {
            state.stickers = state.stickers.filter(sticker => sticker.id !== action.payload)
        },
        editSticker: (state, action: PayloadAction<{id: number, sticker: Partial<Sticker>}>) => {
            const {id, sticker} = action.payload
            const existingSticker = state.stickers.find(sticker => sticker.id === id)
            if(existingSticker) {
                Object.assign(existingSticker, sticker)
            }
        }
    }
})

export const {addSticker, deleteSticker, editSticker} = StickersSlice.actions

export default StickersSlice.reducer