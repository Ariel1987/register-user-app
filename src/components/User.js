import { Wrapper } from "./NewUser.styles" 

const User = props => {
    return (
            <Wrapper>
                <li>
                    <p>{`${props.name} (${props.age} years old)`}</p>
                </li>
            </Wrapper>
    )
}

export default User