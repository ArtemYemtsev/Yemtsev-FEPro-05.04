import "./Button.css"
import { addItem } from "../../services/addItem.js"

export const Button = ({children, id, type, handler, but_type, button_todo}) => {

    return (
        <button className={
            `button ${ but_type === "remove" ? "button--remove" : "button--add"}`
            }  
            type={type}
            data-id={id}
            onClick={() => 
                but_type === "button--add" 
                ?
                addItem(handler)
                :
                handler( button_todo ? button_todo : id)}>
                { children }
        </button>
    )
}