import React from 'react'

function ContactRow({ contact, setSelectedContactId }) {
    
  return (
    <tr onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
        <td>{contact.username}</td>
        <td>{contact.website}</td>
        <td>{contact.phone}</td>
    </tr>
  )
}

export default ContactRow