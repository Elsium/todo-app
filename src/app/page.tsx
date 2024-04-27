import Link from 'next/link'
export default function Home() {
    return (
        <main className='p-[40px] min-h-screen flex justify-center font-jost'>
            Hello World!
            go to <Link href={`/work`} className='mx-1 text-blue-300 font-bold'>Work</Link> or <Link href={`/login`} className='mx-1 text-blue-300 font-bold'>Login</Link> pages
        </main>
    )
}