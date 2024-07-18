'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [name, useName] = useState('');

    return (
        <div className='flex flex-col justify-center w-full'>
            <h2 className=' mt-4 text-center'>Welcome to Next.js</h2>

            <p className=' mt-2 text-center'>Enter your name to see the <code>/hello/:name</code> route</p>
            <input className=' mt-4 w-24 mx-auto text-center bg-[rgb(255,220,200)] hover:rounded-3xl transition-all duration-300' placeholder="World" onChange={(e) => useName(e.target.value)} style={{ border: '3px solid black', borderRadius: '5px' }}></input>
            <Link className='flex justify-center my-4 w-24 mx-auto text-center rounded-lg hover:rounded-3xl hover:bg-gray-700 transition-all duration-300 ease-linear border-solid border-2 border-black' href={`/hello/${name}`}>Submit</Link>

            <p className='text-center'>If you'd like to see the documentation, <Link href={'/docs'}>click here</Link></p>
        </div>
    )
}
