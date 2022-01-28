import React from "react"
import { Link } from "react-router-dom"

const Quote = ({quote}) => {
    return (
    <>
        <Link to = {`/quote/${quote.id}`}>
            <h1>{quote.author}</h1>
        </Link>
        <h1>{quote.quote}</h1>
    </>
    )
}

export default Quote