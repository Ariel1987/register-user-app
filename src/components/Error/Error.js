import { useEffect, useState } from "react"
import { Wrapper } from "./Error.styles"

const Error = ({ errors = [], onShow }) => {

    const [errorTitle, setErrorTitle] = useState()
    const [localErrors, setLocalErrors] = useState(errors)

    useEffect(() => {setLocalErrors(errors)}, [])

    const renderErrors = () => {
       
        if (localErrors.length <= 0) return null

        return localErrors.map(error => {
            setErrorTitle(error.title)

            return (
                <p>{error.message}</p>
            )
        })
    }

    if (localErrors.length <= 0) return null

    return (
        <Wrapper>
            <header>
                <h2>{localErrors.length > 0 ? 'We found multiple errors' : errorTitle}</h2>
            </header>
            <div>
                {renderErrors()}
            </div>
            <footer>
                <button onClick={onShow}>Okay</button>
            </footer>
        </Wrapper>
    )

}

export default Error