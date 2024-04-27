import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const MenuAdditional = () => {
    return (
        <div>
            <button className='w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] hover:bg-[#ebebeb] hover:font-bold'>
                <ExitToAppIcon/>
                <p>Sing out</p>
            </button>
        </div>
    )
}

export default MenuAdditional