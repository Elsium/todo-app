import React from 'react'
import TableTitle from '@/components/UI/TableTitle'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import StickyItem from '@/components/Table/Sticky/StickyItem/StickyItem'
import AddSticky from '@/components/Table/Sticky/AddSticky/AddSticky'
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react'
import 'overlayscrollbars/styles/overlayscrollbars.css'

const Sticky = () => {
    const stickers = useSelector((state: RootState) => state.stickerData.stickers)

    const sti =  [{
        id: 1,
        title: 'first',
        description: 'any'
    },{
        id: 2,
        title: 'second',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, sed?'
    },{
        id: 3,
        title: 'third',
        description: null
    },{
        id: 4,
        title: 'third',
        description: null
    },{
        id: 5,
        title: 'third',
        description: null
    },{
        id: 6,
        title: 'third',
        description: null
    },{
        id: 7,
        title: 'third',
        description: null
    },{
        id: 8,
        title: 'third',
        description: null
    },{
        id: 9,
        title: 'third',
        description: null
    },{
        id: 10,
        title: 'third',
        description: null
    }]
    return (
        <section className='w-full flex flex-col justify-start p-[30px] select-none'>
            <TableTitle title={'Sticky Wall'}/>
            <OverlayScrollbarsComponent element={'div'} className='mt-[20px] border border-gray-300 rounded p-[20px] min-h-[800px] max-h-[800px]'>
                <div className='grid grid-cols-3 gap-[20px]'>
                    {sti.map(s => <StickyItem key={s.id} id={s.id} title={s.title} description={s.description}/>)}
                    <AddSticky/>
                </div>
            </OverlayScrollbarsComponent>
        </section>
    )
}

export default Sticky