import React, {useEffect} from 'react'
import {signIn, useSession} from 'next-auth/react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/redux/store'
import {signInSuccess} from '@/redux/Features/authSlice'
import {useRouter} from 'next/navigation'

const Session = ({children}:{children: React.ReactNode}) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const {data: session} = useSession()

    useEffect(() => {
        if (!isAuth) router.push('/login')
        if (session?.user && session?.accessToken && !isAuth) {
            dispatch(signInSuccess(session.user))
        }
    }, [isAuth, session, dispatch, router])

    return (<>{children}</>)
}

export default Session