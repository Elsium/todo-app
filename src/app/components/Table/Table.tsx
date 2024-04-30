import DefaultTable from '@/app/components/Table/DefaultTable/DefaultTable'
import Sticky from '@/app/components/Table/Sticky/Sticky'
import Upcoming from '@/app/components/Table/Upcoming/Upcoming'


const Table = () => {
    return (
        <div className='w-full'>
            <DefaultTable/>
            <Sticky/>
            <Upcoming/>
        </div>
    )
}

export default Table