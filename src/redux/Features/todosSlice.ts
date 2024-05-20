import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {uploadTodoData} from '@/redux/Thunks/googleThunk'
import {RootState} from '@/redux/store'
import {IList} from '@/redux/Features/listsSlice'
import {ITag} from '@/redux/Features/tagsSlice'

interface ITodosState {
    todos: ITodo[]
}

export interface ITodo {
    id: number
    title: string
    description: string | null
    list: IList | null
    dueDate: string | null
    tags: ITag[]
    subtasks: ISubtask[]
    completed: boolean
}

export interface ISubtask {
    id: number
    title: string
    completed: boolean
}

export const addTodoAndUpload = createAsyncThunk(
    'todos/addTodoAndUpload',
    async({todo, accessToken}: {todo: Partial<ITodo>, accessToken: string}, {getState, dispatch}) => {
        const newTodo: ITodo = {
            title: '',
            description: null,
            list: null,
            dueDate: null,
            tags: [],
            subtasks: [],
            completed: false,
            ...todo,
            id: Date.now()
        }
        dispatch(addTodo(newTodo))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
        return newTodo
    }
)
export const editTodoAndUpload = createAsyncThunk(
    'todos/editTodoAndUpload',
    async({todo, accessToken}: {todo:Partial<ITodo>, accessToken: string}, {getState, dispatch}) => {
        dispatch(editTodo(todo))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
    }
)

export const removeListFromTodosAndUpload = createAsyncThunk(
    'todos/removeListFromTodosAndUpload',
    async({listId, accessToken}: {listId:number, accessToken: string}, {getState, dispatch}) => {
        dispatch(removeListFromTodos(listId))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
    }
)

export const toggleTodoCompletedAndUpload = createAsyncThunk(
    'todos/toggleTodoCompletedAndUpload',
    async({id, accessToken}: {id:number, accessToken: string}, {getState, dispatch}) => {
        dispatch(toggleTodoCompleted(id))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
    }
)
export const deleteTodoAndUpload = createAsyncThunk(
    'todos/deleteTodoAndUpload',
    async({id, accessToken}: {id:number, accessToken: string}, {getState, dispatch}) => {
        dispatch(deleteTodo(id))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
    }
)
export const toggleSubtaskCompletedAndUpload = createAsyncThunk(
    'todos/toggleSubtaskCompletedAndUpload',
    async({todoId, subtaskId, accessToken}: {todoId:number, subtaskId:number, accessToken: string}, {getState, dispatch}) => {
        dispatch(toggleSubtaskCompleted({todoId, subtaskId}))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
    }
)
export const addSubtaskAndUpload = createAsyncThunk(
    'todos/addSubtaskAndUpload',
    async({todoId, title, accessToken}: {todoId: number, title: string, accessToken: string}, {getState, dispatch}) => {
        const subtask: ISubtask = {
            id: Date.now(),
            title,
            completed: false
        }

        dispatch(addSubtask({todoId, subtask}))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
    }
)
export const deleteSubtaskAndUpload = createAsyncThunk(
    'todos/deleteSubtaskAndUpload',
    async({todoId, subtaskId, accessToken}: {todoId: number, subtaskId: number, accessToken: string}, {getState, dispatch}) => {
        dispatch(deleteSubtask({todoId, subtaskId}))

        const updatedTodos = (getState() as RootState).todoData.todos
        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))
    }
)

const initialState: ITodosState = {
    todos: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action: PayloadAction<Partial<ITodo>>) => {
            const existingTodo = state.todos.find(t => t.id === action.payload.id)
            if(existingTodo) {
                Object.assign(existingTodo, action.payload)
            }
        },
        removeListFromTodos: (state, action: PayloadAction<number>) => {
            const listIdToRemove = action.payload
            state.todos.forEach(todo => {
                if (todo.list && todo.list.id === listIdToRemove) {
                    todo.list = null
                }
            })
        },
        toggleTodoCompleted: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        toggleSubtaskCompleted: (state, action: PayloadAction<{todoId: number, subtaskId: number}>) => {
            const {todoId, subtaskId} = action.payload
            const todo = state.todos.find(todo => todo.id === todoId)
            const subtask = todo?.subtasks?.find(subtask => subtask.id === subtaskId)
            if(subtask) {
                subtask.completed = !subtask.completed
            }
        },
        addSubtask: (state, action: PayloadAction<{todoId: number, subtask: ISubtask}>) => {
            const { todoId, subtask } = action.payload
            const todo = state.todos.find(todo => todo.id === todoId)
            if (todo) {
                todo.subtasks.push(subtask)
            }
        },
        deleteSubtask: (state, action: PayloadAction<{todoId: number, subtaskId: number}>) => {
            const { todoId, subtaskId } = action.payload
            const todo = state.todos.find(todo => todo.id === todoId)
            if (todo) {
                todo.subtasks = todo.subtasks.filter(s => s.id !== subtaskId)
            }
        },
        loadTodos: (state, action: PayloadAction<ITodo[]>) => {
            state.todos = action.payload
        }
    }
})

export const {addTodo, deleteTodo, editTodo, toggleTodoCompleted, toggleSubtaskCompleted, addSubtask, deleteSubtask, loadTodos, removeListFromTodos} = todosSlice.actions

export default todosSlice.reducer