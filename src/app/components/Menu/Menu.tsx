import Title from './Title/Title'
import Search from './Search/Search'
import Tasks from './Tasks/Tasks'
import Lists from './Lists/Lists'
import Tags from './Tags/Tags'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const Menu = () => {

    return (
        <nav className='rounded-xl bg-[#f4f4f4] w-[500px] flex flex-col p-[20px] justify-between font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title/>
                <Search/>
                <Tasks/>
                <hr/>
                <Lists/>
                <hr/>
                <Tags/>
            </div>
            <div>
                <button className='w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] hover:bg-[#ebebeb] hover:font-bold'>
                    <ExitToAppIcon/>
                    <p>Sing out</p>
                </button>
            </div>
        </nav>
    )
}

export default Menu