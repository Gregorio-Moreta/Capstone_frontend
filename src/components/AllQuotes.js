import React from "react"
import Quote from "./Quote"

const AllQuotes = (props) => {
    return props.messages.map((message) => <Quote message={message} key={message.id} />)
    
}

export default AllQuotes