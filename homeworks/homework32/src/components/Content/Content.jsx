import { useEffect } from "react"
import { useState } from "react"

import { getUsers } from "../../services/getUsers.js"
import { Table } from "../Table"
import { Button } from "../Button"
import { Form } from "../Form/Form.jsx"
import { form } from "../../services/form.js"

export const Content = () => {
    const [contacts, setContacts] = useState([])

    const addContact = (contact) => {
        setContacts((prevState)=>{
            return [...prevState, contact]
        })
        form('close')
    }

    const removeContact = (remove) => {
        setContacts((prevState)=>{
            return prevState.filter((contact) => contact.id !== remove)
        })
    }

    useEffect(() => {
        getUsers()
        .then(data => {
            setContacts(()=>{
                return data
            })
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div className="content">
            <Button 
                children={'Add new contact'}
                but_type="button-add"
                button_todo="open"
                handler={form}
            />
            <Form 
                handler={addContact}/>
            <Table 
                contacts={ contacts }
                remove={removeContact}/>
        </div>
    )
}