"use client"

import Link from 'next/link'
import {signIn} from 'next-auth/react'
function Navbar() {
    return(
        <nav className='bg-slate-900 flex justify-between px-24 text-white'>
            <Link href = "/">
            <h1>
                NextGoogle
            </h1>
            </Link>
            <div>
                <Link href = "/dashboard">
                Dashboard
                </Link>
                <button onClick={() => signIn()}>
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default Navbar
