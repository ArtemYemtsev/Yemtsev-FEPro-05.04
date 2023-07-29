import { SmileList } from "../SmileList"
import "./Content"

export const Content = ( {title, text} ) => {

    return (
        <div className="content">
            <h3 className="content__title"> { title } </h3>
            <p className="content__text"> { text } </p>
            <SmileList />
        </div>
    )
}