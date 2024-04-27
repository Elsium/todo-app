'use client'

import SearchIcon from '@mui/icons-material/Search'
import SearchForm from '@/app/components/Menu/SearchForm/SearchForm'

const Search = () => {
    const search = (searchQuery: string) => {
        console.log(searchQuery)
    }

    return (
        <div className='flex w-full rounded border border-gray-300 p-[5px]'>
            <SearchIcon/>
            <SearchForm onSearch={search} cn='ml-[10px] w-11/12 bg-inherit focus:outline-none placeholder:select-none' ph='Search'/>
        </div>
    )
}

export default Search