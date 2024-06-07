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
    return (
        <section className='w-full flex flex-col justify-start p-[10px] md:p-[30px] select-none'>
            <TableTitle title={'Sticky Wall'}/>
            <OverlayScrollbarsComponent element={'div'} className='mt-[20px] border border-gray-300 rounded p-[20px] min-h-[600px] max-h-[600px] md:min-h-[800px] md:max-h-[800px]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
                    {stickers.map(s => <StickyItem key={s.id} id={s.id} title={s.title} description={s.description}/>)}
                    <AddSticky/>
                </div>
            </OverlayScrollbarsComponent>
        </section>
    )
}

export default Sticky