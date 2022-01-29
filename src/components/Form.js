import React, {useState} from "react"

const Form = ({ initialQuote, handleSubmit, buttonLabel, history }) => {
    const [formData, setFormData] = useState(initialQuote)
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    }
    console.log(buttonLabel)

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
}

export default Form