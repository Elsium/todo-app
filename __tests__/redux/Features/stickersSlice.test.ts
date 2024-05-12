import stickersReducer, {addSticker, deleteSticker, editSticker, loadStickers} from '@/redux/Features/stickersSlice'

describe('stickersReducer', () => {
    const initialState = {
        stickers: [],
    }

    it('should handle addSticker', () => {
        const newSticker = { id: 1, title: 'Test Sticker', description: '' }
        const action = { type: addSticker.type, payload: newSticker }
        const expectedState = {
            stickers: [newSticker],
        }
        expect(stickersReducer(initialState, action)).toEqual(expectedState)
    })

    it('should handle deleteSticker', () => {
        const existingState = {
            stickers: [{ id: 1, title: 'Test Sticker', description: '' }],
        }
        const action = { type: deleteSticker.type, payload: 1 }
        expect(stickersReducer(existingState, action)).toEqual(initialState)
    })

    it('should handle editSticker', () => {
        const existingState = {
            stickers: [{ id: 1, title: 'Test Sticker', description: '' }],
        }
        const updatedSticker = { id: 1, title: 'Test Sticker', description: 'Updated Description' }
        const action = { type: editSticker.type, payload: updatedSticker }
        const expectedState = {
            stickers: [updatedSticker],
        }
        expect(stickersReducer(existingState, action)).toEqual(expectedState)
    })

    it('should handle loadStickers', () => {
        const stickersToLoad = [
            { id: 1, title: 'First Sticker', description: 'Description 1' },
            { id: 2, title: 'Second Sticker', description: 'Description 2' }
        ]
        const action = { type: loadStickers.type, payload: stickersToLoad }
        const expectedState = {
            stickers: stickersToLoad,
        }
        expect(stickersReducer(initialState, action)).toEqual(expectedState)
    })
})