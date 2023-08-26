import "./Header.css"
import logo from '../../images/logo.jpg'

export const Header = ( {title, text} ) => {
    return (
        <header className="header">
            <img src={ logo } alt="header_image" className='header__img' />
        <div className='header__block'>
            <h1 className='header__title'>{ title }</h1>
        </div>
        </header>
    )
}