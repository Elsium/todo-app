import { configureStore } from "@reduxjs/toolkit"
import todosReducer from './Features/todosSlice'
import stickersReducer from './Features/stickersSlice'
import tagsReducer from './Features/tagsSlice'
import listsReducer from './Features/listsSlice'
import authReducer from './Features/authSlice'

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        stickers: stickersReducer,
        tags: tagsReducer,
        lists: listsReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch