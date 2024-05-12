import authReducer, { signInSuccess } from '@/redux/Features/authSlice'

describe('authReducer', () => {
    const initialState = {
        user: null,
        isAuth: false
    }

    it('should handle initial state', () => {
        expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('should handle signInSuccess', () => {
        const user = { email: 'test@example.com', image: 'testImage.png', name: 'Test User' }
        const action = { type: signInSuccess.type, payload: user }
        const expectedState = {
            user: user,
            isAuth: true
        }
        expect(authReducer(initialState, action)).toEqual(expectedState)
    })
})