import TagItem from './TagItem/TagItem'
import AddIcon from '@mui/icons-material/Add'
import {useSelector} from 'react-redux'
import {RootState} from '@/app/redux/store'

const Tags = () => {

    const Tags = useSelector((state: RootState) => state.tagData.tags)

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>TAGS</p>
            <div className='flex flex-wrap gap-[10px]'>
                {Tags.map(item => <TagItem key={item.id} name={item.name} color={item.color}/>)}
                <button className='flex items-center justify-start h-7 px-[10px] rounded gap-[10px] hover:bg-[#ebebeb]'>
                    <AddIcon/>
                    <p className='text-xs'>Add Tag</p>
                </button>
            </div>
        </div>
    )
}

export default Tags