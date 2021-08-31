import { useState } from "react";
import { Wrapper, RegisterUserWrapper } from "./App.styles";
import AddUserCard from "./components/AddUserCard/AddUserCard";
import UsersList from "./components/UsersList/UsersList";

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers((state) => [...state, user])
  }
  return (
    <Wrapper>
      <AddUserCard onAddUser={ addUserHandler } />
      {users.length > 0 && 
        <RegisterUserWrapper>
          <UsersList users={ users } />
        </RegisterUserWrapper>}
    </Wrapper>
  );
}

export default App;
