import React, {useEffect} from 'react'
import {useSession} from 'next-auth/react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/app/redux/store'
import {signInSuccess} from '@/app/redux/Features/authSlice'
import {fetchAndSetData} from '@/app/redux/Thunks/fetchAndSetData'
import {useRouter} from 'next/navigation'
const Session = ({children}:{children: React.ReactNode}) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const router = useRouter()
    if (!isAuth) router.push('/login')
    const dispatch = useDispatch<AppDispatch>()
    const {data: session} = useSession()

    useEffect(() => {
        if (session?.user) {
            dispatch(signInSuccess(session.user))
            dispatch(fetchAndSetData())
        }
    }, [session, dispatch])
    return (
        <>
            {children}
        </>
    )
}

export default Session