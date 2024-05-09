'use client'

import {Tag} from '@/redux/Features/tagsSlice'

interface ComponentProps {
    tag: Tag
    filterTodos: (tag: string | undefined) => void
}

const TagItem = ({tag, filterTodos}: ComponentProps) => {

    return (
        <button onClick={() => filterTodos(tag.id.toString())} style={{background: tag.color}} className='h-7 px-[15px] rounded text-xs text-center hover:opacity-70'>
            <p>{tag.name}</p>
        </button>
    )
}

export default TagItem