import img from '@/app/assets/login_image.png'
import Image from 'next/image'

export default function Login() {
    return (
        <main className='grid grid-cols-2 gap-[40px] p-[20px]'>
            <div className='relative h-[calc(100vh-44px)] rounded-xl bg-gray-800 overflow-hidden'>
                <Image src={img} alt={'TaskZen'} className='absolute bottom-0 left-1/5'/>
                <p className='absolute top-[20px] left-[20px] font-jost font-bold text-white text-3xl'>TaskZen</p>
            </div>
            <div className='flex justify-center rounded-xl border-2 border-gray-200'>
                <div className='flex flex-col justify-center items-start h-[calc(100vh-44px)] w-3/4'>
                    <p className='font-jost font-bold text-7xl leading-[120px]'>Log in</p>
                    <p className='font-quicksand text-2xl'>This is a modern, responsive web application designed to help you manage your daily tasks efficiently. The Todo App allows you to organize your tasks with ease, providing a user-friendly interface and a seamless user experience.</p>
                    <button className='mt-[50px] w-[200px] h-[50px]
                    bg-[#ebebeb] rounded-xl self-center
                    text-2xl hover:bg-[#cbcbcb] active:bg-[#dbdbdb]'>Google</button>
                </div>
            </div>
        </main>
    )
}