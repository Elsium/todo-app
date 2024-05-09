'use client'

import SearchIcon from '@mui/icons-material/Search'
import SearchForm from '@/components/Menu/next/SearchForm'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useCallback} from 'react'

const Search = () => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams()
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const filterTodos = (title: string | undefined) => {
        const params = new URLSearchParams(searchParams.toString())
        if (params.get('title') === title) {
            router.push(pathname)
            return
        }
        router.push(pathname)
        title && router.push(`${pathname}?${createQueryString('title', title)}`)
    }

    const search = (searchQuery: string) => {
        filterTodos(searchQuery)
    }

    return (
        <div className='flex w-full rounded border border-gray-300 p-[5px]'>
            <SearchIcon/>
            <SearchForm onSearch={search} cn='ml-[10px] w-11/12 bg-inherit focus:outline-none placeholder:select-none' ph='Search'/>
        </div>
    )
}

export default Search