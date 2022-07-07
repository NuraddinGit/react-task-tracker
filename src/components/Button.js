import propTypes from 'prop-types'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'Add',
}
Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
}

export default Button
