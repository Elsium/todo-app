import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodosState {
    todos: Todo[]
}

export interface Todo {
    id: number
    title: string
    description: string | null
    list: string | null
    dueDate: Date | null
    tags: string[] | null
    subtasks: Subtasks[] | null
    completed: boolean
}

export interface Subtasks {
    id: number
    title: string
    completed: boolean
}

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
        toggleSubtask: (state, action: PayloadAction<{todoId: number, subtaskId: number}>) => {
            const {todoId, subtaskId} = action.payload
            const todo = state.todos.find(todo => todo.id === todoId)
            const subtask = todo?.subtasks?.find(subtask => subtask.id === subtaskId)
            if(subtask) {
                subtask.completed = !subtask.completed
            }
        }
    }
})

export const {addTodo, deleteTodo, editTodo, toggleSubtask} = todosSlice.actions

export default todosSlice.reducer