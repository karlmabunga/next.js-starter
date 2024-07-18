import Link from 'next/link'
export default function Hello() {
    return (
        <>
            <h1 className="text-center mt-12">Hello World</h1>
            <Link
                className='flex justify-center mt-4'
                href={'/'}
            >
                You can go back by pressing here
            </Link>
        </>
    )
}