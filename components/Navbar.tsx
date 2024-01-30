import Link from 'next/link'
function Navbar() {
    return(
        <nav>
            <link href = "/">
            <h1>
                NextGoogle
            </h1>
            </link>
            <div>
                <Link href = "/dashboard">
                Dashboard
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
