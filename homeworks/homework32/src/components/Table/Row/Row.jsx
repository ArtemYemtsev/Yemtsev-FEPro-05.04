import { Button } from "../../Button"

export const Row = ({id, name, phone, email, remove}) => {

    return (
        <tr id={id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td><Button 
            children={'Delete'}
            id={id}
            but_type="remove" 
            handler={remove} /></td>
        </tr>
    )
}