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
    async ({title, description, accessToken}: {title: string, description: string | null, accessToken: string}, {getState, dispatch}) => {
        const newSticker: ISticker = {
            id: Date.now(),
            title,
            description
        }
        dispatch(addSticker(newSticker))

        const updatedStickers = (getState() as RootState).stickerData.stickers
        await dispatch(uploadStickerData({state: updatedStickers, accessToken}))
    }
)

export const deleteStickerAndUpload = createAsyncThunk(
    'stickers/deleteStickerAndUpload',
    async ({id, accessToken}: {id: number, accessToken: string}, {getState, dispatch}) => {
        dispatch(deleteSticker(id))

        const updatedStickers = (getState() as RootState).stickerData.stickers
        await dispatch(uploadStickerData({state: updatedStickers, accessToken}))
    }
)

export const editStickerAndUpload = createAsyncThunk(
    'stickers/editStickerAndUpload',
    async ({sticker, accessToken}: {sticker: ISticker, accessToken: string}, {getState, dispatch}) => {
        dispatch(editSticker(sticker))

        const updatedStickers = (getState() as RootState).stickerData.stickers
        await dispatch(uploadStickerData({state: updatedStickers, accessToken}))
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
        editSticker: (state, action: PayloadAction<ISticker>) => {
            const existingSticker = state.stickers.find(sticker => sticker.id === action.payload.id)
            if(existingSticker) {
                Object.assign(existingSticker, action.payload)
            }
        },
        loadStickers: (state, action: PayloadAction<ISticker[]>) => {
            state.stickers = action.payload
        }
    }
})

export const {addSticker, deleteSticker, editSticker, loadStickers} = StickersSlice.actions

export default StickersSlice.reducer