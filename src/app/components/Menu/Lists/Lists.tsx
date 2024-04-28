import ListItem from './ListItem/ListItem'
import AddIcon from '@mui/icons-material/Add'
import {useSelector} from 'react-redux'
import {RootState} from '@/app/redux/store'

const Lists = () => {
    const Lists = useSelector((state: RootState) => state.listData.lists)

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>LISTS</p>
            {Lists.map(item => <ListItem key={item.id} name={item.name} color={item.color}/>)}
            <button className='w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] hover:bg-[#ebebeb]'>
                <AddIcon/>
                <p>Add New List</p>
            </button>
        </div>
    )
}

export default Lists