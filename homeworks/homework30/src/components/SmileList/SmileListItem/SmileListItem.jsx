import './SmileListItem.css'

export const SmileListItem = ({ id, title, img, counter, hendlerClick }) => {
    
    return (
        <li className="smile-list-item" id={ id } onClick={()=> hendlerClick(id)}>
            <img src={ img } alt={ title } className="smile-list-item__img"/>
            <h4 className="smile-list-item__title">{ title }</h4>
            <p>Vote: { counter }</p>
        </li>
    )
}