import tagsReducer, {addTag, deleteTag, loadTags} from '@/redux/Features/tagsSlice'

describe('tagsReducer', () => {
    const initialState = {
        tags: [],
    }

    it('should handle addTag', () => {
        const newTag = { id: 1, name: 'Test list', color: '#dfdfad' }
        const action = { type: addTag.type, payload: newTag }
        const expectedState = {
            tags: [newTag],
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

    it('should handle loadTags', () => {
        const tagsToLoad = [
            { id: 1, name: 'First Tag', color: '#ff0000' },
            { id: 2, name: 'Second Tag', color: '#00ff00' }
        ]
        const action = { type: loadTags.type, payload: tagsToLoad }
        const expectedState = {
            tags: tagsToLoad,
        }
        expect(tagsReducer(initialState, action)).toEqual(expectedState)
    })
})