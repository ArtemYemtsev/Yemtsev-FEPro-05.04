import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routerPath'

export const Nav = () => {
    return(
        <nav>
            <ul className='menu__list'>
                <li className='menu__list__item'>
                    <Link to={ROUTES.root}>Home</Link>
                </li>
                <li className='menu__list__item'>
                    <Link to={ROUTES.posts}>Posts</Link>
                </li>
            </ul>
        </nav>
    )
}