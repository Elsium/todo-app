import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodosState {
    todos: Todo[]
}

interface Todo {
    id: number
    title: string
    description: string | null
    list: number | null
    dueDate: Date | null
    tags: number[]
    subtasks: Subtask[]
    completed: boolean
}

interface Subtask {
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
        loadTodos: (state, action: PayloadAction<TodosState>) => {
            state.todos = action.payload
        }
    }
})

export const {addTodo, deleteTodo, editTodo, toggleTodoCompleted, toggleSubtaskCompleted, addSubtask, deleteSubtask, loadTodos} = todosSlice.actions

export default todosSlice.reducer