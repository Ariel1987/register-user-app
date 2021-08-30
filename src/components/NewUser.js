import RegisterUser from "./RegisterUser"
import { Wrapper } from "./RegisterUser.styles"

const NewUser = props => {

    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
          ...enteredUserData,
          id: Math.random().toString()
        }
        props.onAddUser(userData)
      }
    
      return (
          <div>
            <Wrapper>
              <RegisterUser  onSaveUserData={saveUserDataHandler} />
            </Wrapper>
          </div>


      )
}

export default NewUser