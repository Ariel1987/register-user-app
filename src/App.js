import { useState } from "react";
import { Wrapper, RegisterUserWrapper } from "./App.styles";
import NewUser from "./components/NewUser";
import ShowUsers from "./components/ShowUsers";

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user]
    })
  }

  return (
    <Wrapper>
      <NewUser onAddUser = {addUserHandler} />
      {users.length > 0 && 
        <RegisterUserWrapper>
          <ShowUsers users={users} />
        </RegisterUserWrapper>}
    </Wrapper>
  );
}

export default App;
