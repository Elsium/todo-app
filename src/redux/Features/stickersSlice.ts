import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '@/redux/store'
import {uploadStickerData} from '@/redux/Thunks/googleThunk'

interface IStickersState {
    stickers: ISticker[]
}

export interface ISticker {
    id: number
    title: string
    description: string | null
}

export const addStickerAndUpload = createAsyncThunk(
    'stickers/addStickerAndUpload',
    async ({title, accessToken}: {title: string, accessToken: string}, {getState, dispatch}) => {
        const newSticker: ISticker = {
            id: Date.now(),
            title,
            description: null
        }

        dispatch(addSticker(newSticker))

        const updatedStickers = (getState() as RootState).stickerData.stickers

        await dispatch(uploadStickerData({state: updatedStickers, accessToken}))

        return newSticker
    }
)

const initialState: IStickersState = {
    stickers: []
}

const StickersSlice = createSlice({
    name: 'stickers',
    initialState,
    reducers: {
        addSticker: (state, action: PayloadAction<ISticker>) => {
            state.stickers.push(action.payload)
        },
        deleteSticker: (state, action: PayloadAction<number>) => {
            state.stickers = state.stickers.filter(sticker => sticker.id !== action.payload)
        },
        editSticker: (state, action: PayloadAction<{id: number, sticker: Partial<ISticker>}>) => {
            const {id, sticker} = action.payload
            const existingSticker = state.stickers.find(sticker => sticker.id === id)
            if(existingSticker) {
                Object.assign(existingSticker, sticker)
            }
        },
        loadStickers: (state, action: PayloadAction<ISticker[]>) => {
            state.stickers = action.payload
        }
    }
})

export const {addSticker, deleteSticker, editSticker, loadStickers} = StickersSlice.actions

export default StickersSlice.reducer