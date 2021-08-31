import RegisterUserForm from "../RegisterUserForm/RegisterUserForm"
import { Wrapper } from "../RegisterUserForm/RegisterUserForm.styles"

const AddUserCard = ({ onAddUser }) => {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString()
    }
    onAddUser(userData)
  }

  return (
    <Wrapper>
      <RegisterUserForm onSaveUserData={saveUserDataHandler} />
    </Wrapper>
  )
}

export default AddUserCard