import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>Certificates</Link>
                <Link to='/'>Projects</Link>
            </nav>
        </header>
    )
}