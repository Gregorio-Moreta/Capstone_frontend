import React, {useState} from "react"

const Form = ({ initialQuote, handleSubmit, buttonLabel, history }) => {
    const [formData, setFormData] = useState(initialQuote)
    const handleChange = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    }
}

return (
    <form onSubmit={handleSubmission}>
        <input
            type="text"
            onChange={handleChange}
            value={formData.author}
            name="author"
        />
        <input
            type="text"
            onChange={handleChange}
            value={formData.quote}
            name="quote"
        />
        <input type="submit" value={buttonLabel} />
    </form>
)

export default Form