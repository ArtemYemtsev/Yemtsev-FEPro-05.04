import { Row } from "./Row"
import "./Table.css"

export const Table = ({contacts, remove}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(item => 
                    <Row 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        remove={remove}
                    />)}
            </tbody>
        </table>
    )
}