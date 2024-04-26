interface ComponentProps {
    name: string
    color: string
}

const TagItem = ({name, color}: ComponentProps) => {

    return (
        <button style={{background: color}} className='h-7 px-[15px] rounded text-xs text-center hover:opacity-70'>
            <p>{name}</p>
        </button>
    )
}

export default TagItem