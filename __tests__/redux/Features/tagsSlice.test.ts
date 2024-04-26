import tagsReducer, { addTag, deleteTag } from '@/app/redux/Features/tagsSlice'

describe('tagsReducer', () => {
    const initialState = {
        tags: [],
    }

    it('should handle addTag', () => {
        const newSticker = { id: 1, name: 'Test list', color: '#dfdfad' }
        const action = { type: addTag.type, payload: newSticker }
        const expectedState = {
            tags: [newSticker],
        }
        expect(tagsReducer(initialState, action)).toEqual(expectedState)
    })

    it('should handle deleteTag', () => {
        const existingState = {
            tags: [{ id: 1, name: 'Test list', color: '#dfdfad' }],
        }
        const action = { type: deleteTag.type, payload: 1 }
        expect(tagsReducer(existingState, action)).toEqual(initialState)
    })
})