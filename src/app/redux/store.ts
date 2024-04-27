import {configureStore} from "@reduxjs/toolkit"
import todosReducer from './Features/todosSlice'
import stickersReducer from './Features/stickersSlice'
import tagsReducer from './Features/tagsSlice'
import listsReducer from './Features/listsSlice'
import authReducer from './Features/authSlice'

export const store = configureStore({
    reducer: {
        todoData: todosReducer,
        stickerData: stickersReducer,
        tagData: tagsReducer,
        listData: listsReducer,
        auth: authReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch