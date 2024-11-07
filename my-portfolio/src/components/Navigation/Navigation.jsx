import 'flag-icons/css/flag-icons.min.css';

import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <header>
            <button className='flags'>
                 
            </button>
            <nav>
               
                <div className='flags'>
                    <span class="fi fi-de"> </span>
                    <span class="fi fi-gb"> </span>
                    <span class="fi fi-bg"> </span>  
                </div>
                <div className='nav-buttons'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Certificates</Link>
                    <Link to='/'>Projects</Link>
                </div>
            
            </nav>
        </header>
    )
}