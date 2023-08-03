import './Nav.css'
import NavList from './NavList/NavList'

const Nav = () => {
    return (
        <nav className="navigation">
            <h3 className="navigation__title">Navigation menu</h3>
            <NavList />
        </nav>
    )
}

export default Nav