import stickersReducer, { addSticker, deleteSticker, editSticker } from '@/app/redux/Features/stickersSlice';

describe('stickersReducer', () => {
    const initialState = {
        stickers: [],
    };

    it('should handle addSticker', () => {
        const newSticker = { id: 1, title: 'Test Sticker', description: '' };
        const action = { type: addSticker.type, payload: newSticker };
        const expectedState = {
            stickers: [newSticker],
        };
        expect(stickersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle deleteSticker', () => {
        const existingState = {
            stickers: [{ id: 1, title: 'Test Sticker', description: '' }],
        };
        const action = { type: deleteSticker.type, payload: 1 };
        expect(stickersReducer(existingState, action)).toEqual(initialState);
    });

    it('should handle editSticker', () => {
        const existingState = {
            stickers: [{ id: 1, title: 'Test Sticker', description: '' }],
        };
        const updatedSticker = { description: 'Updated Description' };
        const action = { type: editSticker.type, payload: { id: 1, sticker: updatedSticker } };
        const expectedState = {
            stickers: [{ ...existingState.stickers[0], ...updatedSticker }],
        };
        expect(stickersReducer(existingState, action)).toEqual(expectedState);
    });
});