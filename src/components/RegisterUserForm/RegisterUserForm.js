import { useState } from "react"
import { ErrorWrapper, RegisterUserWrapper } from "../../App.styles"
import Error from "../Error/Error"
import { Validator } from "../../validators/formValidator"

const RegisterUserForm = ({ onSaveUserData }) => {

  const [error, setError] = useState()

  const submitHandler = event => {
    event.preventDefault()
    let errors = [];
    const form = event.target

    const { name, age } = form

    const values = [{
      value: name.value,
      field: 'name'
    },
    {
      value: age.value,
      field: 'age'
    }]

    const emptyFieldError = Validator.validateEmptyFields(values)

    if (emptyFieldError.length > 0) {
      emptyFieldError.forEach(e => {
        errors.push(e)
      })
    }
    const ageError = Validator.validatePositiveNumber(age.value)
    if (ageError) {
      errors.push(ageError)
    }

    if (errors.length > 0) {
      setError(errors)
      form.reset()
    } else {
      const userData = {
        name: name.value,
        age: age.value
      }
      onSaveUserData(userData)
      form.reset()
    }
  }

  const errorHandler = () => {
    setError(null)
  }
  return (
    <RegisterUserWrapper>
      {
        !!error && <ErrorWrapper
          onClick={errorHandler}
        >
          <Error
            errors={error}
            onShow={errorHandler}
          />
        </ErrorWrapper>
      }
      <form onSubmit={submitHandler}>
        <span>Username</span>
        <input type="text" name="name" />
        <span>Age (Years)</span>
        <input type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </RegisterUserWrapper>
  )
}

export default RegisterUserForm
