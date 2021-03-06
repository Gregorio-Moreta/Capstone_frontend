import React from 'react';
import { Link } from 'react-router-dom';

const SingleQuote = ({ messages, match, edit, deleteMessage }) => {
    const id = parseInt(match.params.id)
    const message = messages.find((message) => message.id ===id )

return (
    <div>
        <h1>{message?.author}</h1>
        <h2>{message?.message}</h2>
        <button onClick={(event) => edit(message)}>Edit</button>
        <button onClick={(event) => deleteMessage(message)}>Delete</button>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
)

}

export default SingleQuote