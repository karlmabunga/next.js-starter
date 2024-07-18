import Link from 'next/link'
export default function Page({ params }: {
    params: { name: string }
}) {
    const { name } = params;
    return (
        <>
            <h1 className="text-center mt-4">Hello to you {name}</h1>
            <Link
                className='flex justify-center mt-4'
                href={'/'}
            >
                You can go back by pressing here
            </Link>
        </>
    )
}