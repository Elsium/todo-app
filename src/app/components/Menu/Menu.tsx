import Additional from '@/app/components/Menu/Additional/Additional'
import Title from '@/app/components/UI/Title/Title'
import Search from '@/app/components/Menu/Search/Search'
import MenuTasks from '@/app/components/Menu/MenuTasks/MenuTasks'
import Lists from '@/app/components/Menu/Lists/Lists'
import Tags from '@/app/components/Menu/Tags/Tags'
import MenuIcon from '@mui/icons-material/Menu'

const Menu = () => {

    return (
        <nav className='flex flex-col justify-between w-[500px] p-[20px] bg-[#f4f4f4] rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Menu'} Icon={MenuIcon}/>
                <Search/>
                <MenuTasks/>
                <hr/>
                <Lists/>
                <hr/>
                <Tags/>
            </div>
            <Additional/>
        </nav>
    )
}

export default Menu