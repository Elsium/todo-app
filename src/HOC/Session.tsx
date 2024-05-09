import React, {useEffect} from 'react'
import {signIn, useSession} from 'next-auth/react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/redux/store'
import {signInSuccess} from '@/redux/Features/authSlice'
import {useRouter} from 'next/navigation'
import {getAllData} from '@/redux/Thunks/googleThunk'
const Session = ({children}:{children: React.ReactNode}) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const {data: session} = useSession()

    useEffect(() => {
        if (!isAuth) router.push('/login')
        if (session?.error === 'RefreshAccessTokenError') signIn('google', { callbackUrl: '/work' })
        if (session?.user && session?.accessToken && !isAuth) {
            dispatch(signInSuccess(session.user))
            dispatch(getAllData(session.accessToken))
        }
    }, [isAuth, session, dispatch])

    return (
        <>
            {children}
        </>
    )
}

export default Session