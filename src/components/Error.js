import { Wrapper } from "./Error.styles"

const Error = props => {


    return (
        <Wrapper>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <button onClick={props.onShow}>Okay</button>
            </footer>
        </Wrapper>
    )

}

export default Error