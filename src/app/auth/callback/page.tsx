'use client'

// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { useDispatch } from 'react-redux'
// import { signInSuccess } from '@/app/redux/Features/authSlice'

const AuthCallbackPage = () => {
    // const router = useRouter()
    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     const token = router.query.code as string
    //
    //     if (router.isReady && token) {
    //         dispatch(signInSuccess({ token: 'your_access_token' }))
    //         router.push('/')
    //     }
    // }, [router, dispatch])

    return (
        <div>
            <p>Authenticating...</p>
        </div>
    )
}

export default AuthCallbackPage