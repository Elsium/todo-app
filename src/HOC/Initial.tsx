import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/redux/store'
import {useSession} from 'next-auth/react'
import {getAllData} from '@/redux/Thunks/googleThunk'
import Loader from '@/components/UI/Loader'

const Initial = ({children}:{children: React.ReactNode}) => {
    const isInitial = useSelector((state: RootState) => state.initial.isInitial)
    const dispatch = useDispatch<AppDispatch>()
    const {data: session} = useSession()

    useEffect(() => {
        if(session?.accessToken) {
            dispatch(getAllData(session.accessToken))
        }
    }, [dispatch, session])

    if (!isInitial) return <Loader/>

    return (<>{children}</>)
}

export default Initial