import { store } from '@/redux/store'
import { addTodo, deleteTodo } from '@/redux/Features/todosSlice'
import { addSticker, deleteSticker } from '@/redux/Features/stickersSlice'
import { addList, deleteList } from "@/redux/Features/listsSlice"
import { addTag, deleteTag } from "@/redux/Features/tagsSlice"

describe('store', () => {
    it('should dispatch actions for todosSlice', () => {
        const todo = { id: 1, title: 'Test TodoItem', description: null, list: null, dueDate: null, tags: [], subtasks: [], completed: false }
        store.dispatch(addTodo(todo))
        let state = store.getState()
        expect(state.todoData.todos).toContainEqual(todo)

        store.dispatch(deleteTodo(todo.id))
        state = store.getState()
        expect(state.todoData.todos).not.toContainEqual(todo)
    })

    it('should dispatch actions for stickersSlice', () => {
        const sticker = { id: 1, title: 'Test Sticker', description: '' }
        store.dispatch(addSticker(sticker))
        let state = store.getState()
        expect(state.stickerData.stickers).toContainEqual(sticker)

        store.dispatch(deleteSticker(sticker.id))
        state = store.getState()
        expect(state.stickerData.stickers).not.toContainEqual(sticker)
    })

    it('should dispatch actions for listSlice', () => {
        const newList = { id: 1, name: 'Test List', color: '#dfdfad' }

        store.dispatch(addList(newList))
        let state = store.getState()
        expect(state.listData.lists).toContainEqual(newList)

        store.dispatch(deleteList(newList.id))
        state = store.getState()
        expect(state.listData.lists).not.toContainEqual(newList)
    })

    it('should dispatch actions for tagSlice', () => {
        const newTag = { id: 1, name: 'Test Tag', color: '#dfdfad' }

        store.dispatch(addTag(newTag))
        let state = store.getState()
        expect(state.tagData.tags).toContainEqual(newTag)

        store.dispatch(deleteTag(newTag.id))
        state = store.getState()
        expect(state.tagData.tags).not.toContainEqual(newTag)
    })
})