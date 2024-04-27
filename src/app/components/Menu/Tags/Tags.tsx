import TagItem from './TagItem/TagItem'
import AddIcon from '@mui/icons-material/Add'

const Tags = () => {

    const Tag = [
        {id: 1, name: 'Tag 1', color: '#ffa7f7'},
        {id: 2, name: 'Tag 2', color: '#adffaa'}
    ]

    return (
        <div className='flex flex-col items-start gap-[5px]'>
            <p className='font-jost font-bold text-xs'>TAGS</p>
            <div className='flex flex-wrap gap-[10px]'>
                {Tag.map(item => <TagItem key={item.id} name={item.name} color={item.color}/>)}
                <button className='flex items-center justify-start h-7 px-[10px] rounded gap-[10px] hover:bg-[#ebebeb]'>
                    <AddIcon/>
                    <p className='text-xs'>Add Tag</p>
                </button>
            </div>
        </div>
    )
}

export default Tags