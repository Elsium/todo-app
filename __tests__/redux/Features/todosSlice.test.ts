import todosReducer, {
    addSubtask,
    addTodo, deleteSubtask,
    deleteTodo,
    editTodo, loadTodos,
    toggleSubtaskCompleted,
    toggleTodoCompleted
} from '@/redux/Features/todosSlice'

describe('todosReducer', () => {
    const initialState = {
        todos: []
    }
    const todo = {id: 1, title: 'Test TodoItem', description: null, list: null, dueDate: null, tags: [], subtasks: [], completed: false}
    const subtask = { id: 1, title: 'Test Subtask', completed: false }

    it('should handle initial state', () => {
        expect(todosReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('should handle addTodo', () => {
        const newTodo = { id: 1, title: 'Test TodoItem', description: null, list: null, dueDate: null, tags: null, subtasks: null, completed: false }
        const action = { type: addTodo.type, payload: newTodo }
        const expectedState = {
            todos: [newTodo],
        }
        expect(todosReducer(initialState, action)).toEqual(expectedState)
    })

    it('should handle deleteTodo', () => {
        const existingState = {
            todos: [{ id: 1, title: 'Test TodoItem', description: null, list: null, dueDate: null, tags: [], subtasks: [], completed: false }],
        }
        const action = { type: deleteTodo.type, payload: 1 }
        expect(todosReducer(existingState, action)).toEqual(initialState)
    })

    it('should handle editTodo', () => {
        const existingState = {
            todos: [{ id: 1, title: 'Test TodoItem', description: null, list: null, dueDate: null, tags: [], subtasks: [], completed: false }],
        }
        const updatedTodo = { id: 1, title: 'Updated TodoItem'}
        const action = { type: editTodo.type, payload: updatedTodo }
        const expectedState = {
            todos: [{ ...existingState.todos[0], ...updatedTodo }]
        }
        expect(todosReducer(existingState, action)).toEqual(expectedState)
    })

    it('should toggle the completed state of a todo', () => {
        let newState = todosReducer(initialState, addTodo(todo))
        expect(newState.todos[0].completed).toBe(false)

        newState = todosReducer(newState, toggleTodoCompleted(todo.id))
        expect(newState.todos[0].completed).toBe(true)

        newState = todosReducer(newState, toggleTodoCompleted(todo.id))
        expect(newState.todos[0].completed).toBe(false)
    })

    it('should handle adding a subtask', () => {
        let state = todosReducer(initialState, addTodo(todo))
        state = todosReducer(state, addSubtask({ todoId: todo.id, subtask }))
        expect(state.todos[0].subtasks).toContainEqual(subtask)
    })

    it('should handle toggling a subtask completed state', () => {
        let state = todosReducer(initialState, addTodo(todo))
        state = todosReducer(state, addSubtask({ todoId: todo.id, subtask }))
        state = todosReducer(state, toggleSubtaskCompleted({ todoId: todo.id, subtaskId: subtask.id }))
        expect(state.todos[0].subtasks[0].completed).toBe(true)
    })

    it('should handle deleting a subtask', () => {
        let state = todosReducer(initialState, addTodo(todo))
        state = todosReducer(state, addSubtask({ todoId: todo.id, subtask }))
        state = todosReducer(state, deleteSubtask({ todoId: todo.id, subtaskId: subtask.id }))
        expect(state.todos[0].subtasks).toHaveLength(0)
    })

    it('should handle loadTodos', () => {
        const todosToLoad = [
            { id: 1, title: 'Loaded TodoItem 1', description: 'Description 1', list: null, dueDate: null, tags: [], subtasks: [], completed: false },
            { id: 2, title: 'Loaded TodoItem 2', description: 'Description 2', list: null, dueDate: null, tags: [], subtasks: [], completed: false }
        ]
        const action = { type: loadTodos.type, payload: todosToLoad }
        const expectedState = {
            todos: todosToLoad,
        }
        expect(todosReducer(initialState, action)).toEqual(expectedState)
    })
})