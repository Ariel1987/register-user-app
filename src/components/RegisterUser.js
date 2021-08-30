import { useState } from "react"
import { ErrorWrapper, RegisterUserWrapper } from "../App.styles"
import Error from "./Error"

const RegisterUser = props => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const nameChangeHandler = event => {
        setEnteredName(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            setEnteredName('')
            setEnteredAge('')
            return
        }    
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            })
            setEnteredName('')
            setEnteredAge('')
            return;
        }

        const userData = {
            name: enteredName,
            age: enteredAge
        }
    
        props.onSaveUserData(userData)
        setEnteredName('')
        setEnteredAge('')
        
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
            <RegisterUserWrapper>
                {error && <ErrorWrapper onClick={errorHandler}><Error title={error.title} message={error.message} onShow={errorHandler} /></ErrorWrapper>}
                <form onSubmit={submitHandler}>
                    <span>Username</span>
                    <input 
                        type="text" 
                        value={enteredName} 
                        onChange={nameChangeHandler}
                    ></input>
                    <span>Age (Years)</span>
                    <input 
                        type="number" 
                        value={enteredAge} 
                        onChange={ageChangeHandler}
                    ></input>
                    <button type="submit">Add User</button>
                </form>
            </RegisterUserWrapper>
    )
}

export default RegisterUser
