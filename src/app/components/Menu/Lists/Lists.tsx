import ListItem from './ListItem/ListItem'
import AddIcon from '@mui/icons-material/Add'

const Lists = () => {

    const List = [
        {id: 1, name: 'Personal', color: '#ff904b', count: 5},
        {id: 2, name: 'Work', color: '#ffe14b', count: 3},
        {id: 3, name: 'List 1', color: '#4b5aff', count: 0}
    ]

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>LISTS</p>
            {List.map(item => <ListItem key={item.id} name={item.name} color={item.color} count={item.count}/>)}
            <button className='w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] hover:bg-[#ebebeb]'>
                <AddIcon/>
                <p>Add New List</p>
            </button>
        </div>
    )
}

export default Lists