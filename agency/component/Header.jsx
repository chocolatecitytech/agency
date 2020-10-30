import Link from 'next/link';

function Header() {
    return (
        <div>
        <nav className="nav">
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/consent">
                        <a>Consent</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Header
