import { Wrapper } from "./UserItem.styles" 

const UserItem = props => {
    return (
            <Wrapper>
                <p>{`${props.name} (${props.age} years old)`}</p>
            </Wrapper>
    )
}

export default UserItem