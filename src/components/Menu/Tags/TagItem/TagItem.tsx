'use client'

import React from 'react'
import {ITag} from '@/redux/Features/tagsSlice'

interface ComponentProps {
    tag: ITag
    filterTodos: (tag: string | undefined) => void
}

const TagItem = ({tag, filterTodos}: ComponentProps) => {

    return (
        <button onClick={() => filterTodos(tag.name)} style={{background: tag.color}} className='h-7 px-[15px] rounded text-xs text-center hover:opacity-70'>
            <p>{tag.name}</p>
        </button>
    )
}

export default TagItem