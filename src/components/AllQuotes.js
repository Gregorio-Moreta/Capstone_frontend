import React from "react"
import Quote from "./Quote"

const AllQuotes = (props) => {
    return props.quotes.map((quote) => <Quote quote={quote} key={quote.id} />)
    
}

export default AllQuotes