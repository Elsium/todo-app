import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {uploadTodoData} from '@/redux/Thunks/googleThunk'
import {RootState} from '@/redux/store'

interface TodosState {
    todos: Todo[]
}

export interface Todo {
    id: number
    title: string
    description: string | null
    list: number | null
    dueDate: Date | null
    tags: number[]
    subtasks: Subtask[]
    completed: boolean
}

export interface Subtask {
    id: number
    title: string
    completed: boolean
}

export const addTodoAndUpload = createAsyncThunk(
    'todos/addTodoAndUpload',
    async({title, accessToken}: {title: string, accessToken: string}, {getState, dispatch}) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            description: null,
            list: null,
            dueDate: null,
            tags: [],
            subtasks: [],
            completed: false,
        }

        dispatch(addTodo(newTodo))

        const updatedTodos = (getState() as RootState).todoData.todos

        await dispatch(uploadTodoData({state: updatedTodos, accessToken}))

        return newTodo
    }
)

const initialState: TodosState = {
    todos: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action: PayloadAction<{id: number, todo: Partial<Todo>}>) => {
            const {id, todo} = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if(existingTodo) {
                Object.assign(existingTodo, todo)
            }
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
        addSubtask: (state, action: PayloadAction<{todoId: number, subtask: Subtask}>) => {
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
        loadTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload
        }
    }
})

export const {addTodo, deleteTodo, editTodo, toggleTodoCompleted, toggleSubtaskCompleted, addSubtask, deleteSubtask, loadTodos} = todosSlice.actions

export default todosSlice.reducer