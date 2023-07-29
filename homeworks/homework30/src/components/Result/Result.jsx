import './Result.css'

export const Result = ( { text, title, img } ) => {

    return (
        <div className="result">
            <p className="result__text">
                Winner: {text}
            </p>
            <img src={ img } alt={ title } className="result__img" />
        </div>
    )
}