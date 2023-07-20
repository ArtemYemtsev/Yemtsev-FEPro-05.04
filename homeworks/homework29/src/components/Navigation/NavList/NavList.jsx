import NavItem from './NavItem/NavItem'
import './NavList.css'

const DATA_MENU = [
    {   
        id: "01home",
        title: "Home"
    },
    {   
        id: "02products",
        title: "Products"
    },
    {   
        id: "03about",
        title: "About us"
    },
    {   
        id: "04contacts",
        title: "Contacts"
    }
]

const NavList = () => {
    return (
        <ul className="nav-list">
            {DATA_MENU.map(( {id, title}) => <NavItem key={ id } title={ title } /> )}
        </ul>
    )
}

export default NavList