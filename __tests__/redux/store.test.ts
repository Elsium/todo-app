import { store } from '@/app/redux/store';
import { addTodo, deleteTodo } from '@/app/redux/Features/todosSlice';
import { addSticker, deleteSticker } from '@/app/redux/Features/stickersSlice';

describe('store', () => {
    it('should dispatch actions for todosSlice', () => {
        const todo = { id: 1, title: 'Test Todo', description: null, list: null, dueDate: null, tags: [], subtasks: [], completed: false };
        store.dispatch(addTodo(todo));
        let state = store.getState();
        expect(state.todos.todos).toContainEqual(todo);

        store.dispatch(deleteTodo(todo.id));
        state = store.getState();
        expect(state.todos.todos).not.toContainEqual(todo);
    });

    it('should dispatch actions for stickersSlice', () => {
        const sticker = { id: 1, title: 'Test Sticker', description: '' };
        store.dispatch(addSticker(sticker));
        let state = store.getState();
        expect(state.stickers.stickers).toContainEqual(sticker);

        store.dispatch(deleteSticker(sticker.id));
        state = store.getState();
        expect(state.stickers.stickers).not.toContainEqual(sticker);
    });
});