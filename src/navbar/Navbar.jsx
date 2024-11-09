import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">

<a href="/" className="logo">JALAL</a>
</div>
<div className="navbar-center">
<ul className="nav-links">

    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/aboutus">About Us</a>
    </li>
    <li>
        <a href="/rituals">Rituals</a>
    </li>
    <li>
        <a href="/dogs">Dogs</a>
    </li>
</ul>

</div>
<div className="navbar-right">
    <a href="/user" className="user-icon">
    <FontAwesomeIcon icon={faCat} />
    </a>
</div>

</nav>

    );
}

export default Navbar;