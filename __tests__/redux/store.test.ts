import { store } from '@/app/redux/store'
import { addTodo, deleteTodo } from '@/app/redux/Features/todosSlice'
import { addSticker, deleteSticker } from '@/app/redux/Features/stickersSlice'
import { addList, deleteList } from "@/app/redux/Features/listsSlice"
import { addTag, deleteTag } from "@/app/redux/Features/tagsSlice"

describe('store', () => {
    it('should dispatch actions for todosSlice', () => {
        const todo = { id: 1, title: 'Test Todo', description: null, list: null, dueDate: null, tags: [], subtasks: [], completed: false }
        store.dispatch(addTodo(todo))
        let state = store.getState()
        expect(state.todos.todos).toContainEqual(todo)

        store.dispatch(deleteTodo(todo.id))
        state = store.getState()
        expect(state.todos.todos).not.toContainEqual(todo)
    })

    it('should dispatch actions for stickersSlice', () => {
        const sticker = { id: 1, title: 'Test Sticker', description: '' }
        store.dispatch(addSticker(sticker))
        let state = store.getState()
        expect(state.stickers.stickers).toContainEqual(sticker)

        store.dispatch(deleteSticker(sticker.id))
        state = store.getState()
        expect(state.stickers.stickers).not.toContainEqual(sticker)
    })

    it('should dispatch actions for listSlice', () => {
        const newList = { id: 1, name: 'Test List', color: '#dfdfad' }

        store.dispatch(addList(newList))
        let state = store.getState()
        expect(state.lists.lists).toContainEqual(newList)

        store.dispatch(deleteList(newList.id))
        state = store.getState()
        expect(state.lists.lists).not.toContainEqual(newList)
    })

    it('should dispatch actions for tagSlice', () => {
        const newTag = { id: 1, name: 'Test Tag', color: '#dfdfad' }

        store.dispatch(addTag(newTag))
        let state = store.getState()
        expect(state.tags.tags).toContainEqual(newTag)

        store.dispatch(deleteTag(newTag.id))
        state = store.getState()
        expect(state.tags.tags).not.toContainEqual(newTag)
    })
})