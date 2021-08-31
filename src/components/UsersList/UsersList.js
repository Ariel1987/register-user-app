import UserItem from "../UserItem/UserItem"

const UsersList = props => {
    return (
        <ul>
            {props.users.map((user) => (
                <UserItem
                    key={user.id} 
                    name={user.name}
                    age={user.age}
                />
            ))}
        </ul>
    )
}

export default UsersList