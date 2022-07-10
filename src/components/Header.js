import propTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="+" onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Note',
}

Header.propTypes = {
  title: propTypes.string.isRequired,
}
export default Header
