import React from 'react';
import { Link } from 'react-router-dom';

const SingleQuote = ({ quotes, match }) => {
    const id = parseInt(match.params.id)
    const quote = quotes.find((quote) => quote.id ===id )

return (
    <div>
        <h1>{quote?.author}</h1>
        <h2>{quote?.quote}</h2>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
)

}

export default SingleQuote