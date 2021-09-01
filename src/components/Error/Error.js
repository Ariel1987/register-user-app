import { Wrapper } from "./Error.styles"

const Error = ({ errors = [], onShow }) => {

  const renderErrors = () => {
    if (errors.length <= 0) return null
    return errors.map((error, index) => {
      return (
        <p key={`string-${index}`}>{error.message}</p>
      )
    })
  }

  if (errors.length <= 0) return null

  return (
    <Wrapper>
      <header>
        <h2>{errors.length > 1 ? 'We found multiple errors' : errors[0].title}</h2>
      </header>
      <div>
        {renderErrors()}
      </div>
      <footer>
        <button onClick={onShow}>Okay</button>
      </footer>
    </Wrapper>
  )

}

export default Error