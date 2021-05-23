import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper cyan darken-2">
                <Link to="/" className="brand-logo" style={{marginLeft: '1rem'}}>You Recipe</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>

    )
}