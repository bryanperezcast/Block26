import { useState } from 'react'
import { useEffect } from 'react'
import ContactRow from './ContactRow'

function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState([])
    useEffect(()=>{
        async function contactWithId() {
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            )
            const result = await response.json()
            setContact(result)
            console.log(result)
          }
          catch (error) {
            console.error(error)
          }
        }
        contactWithId()
      },[])

    return (
    <>
    <table>
          <thead>
            <tr>
              <th colSpan="3">Selected Contact Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>username</td>
              <td>website</td>
              <td>phone</td>
            </tr>
            <ContactRow contact={contact} setSelectedContactId={setSelectedContactId} />
          </tbody>
    </table>
    </>
  )
}

export default SelectedContact