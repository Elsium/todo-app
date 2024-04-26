import MenuIcon from '@mui/icons-material/Menu'

const Title = () => {
    return (
        <div className='flex justify-between'>
            <p className='font-poppins font-bold text-3xl'>Menu</p>
            <button>
                <MenuIcon style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/>
            </button>
        </div>
    )
}

export default Title