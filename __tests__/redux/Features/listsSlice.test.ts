import listsReducer, {
    addList,
    deleteList,
    loadLists
} from '@/redux/Features/listsSlice'

describe('listsReducer', () => {
    const initialState = {
        lists: [],
    }

    it('should handle addList', () => {
        const newSticker = {id: 1, name: 'Test list', color: '#dfdfad'}
        const action = {type: addList.type, payload: newSticker}
        const expectedState = {
            lists: [newSticker],
        }
        expect(listsReducer(initialState, action)).toEqual(expectedState)
    })

    it('should handle deleteList', () => {
        const existingState = {
            lists: [{id: 1, name: 'Test list', color: '#dfdfad'}],
        }
        const action = {type: deleteList.type, payload: 1}
        expect(listsReducer(existingState, action)).toEqual(initialState)
    })

    it('should handle loadLists', () => {
        const listsToLoad = [
            {id: 1, name: 'First list', color: '#ff0000'},
            {id: 2, name: 'Second list', color: '#00ff00'}
        ]
        const action = {type: loadLists.type, payload: listsToLoad}
        const expectedState = {
            lists: listsToLoad,
        }
        expect(listsReducer(initialState, action)).toEqual(expectedState)
    })
})