import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () => {
    console.log("Hi");
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button  text='+' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Note',
}

Header.propTypes = {
    title : propTypes.string.isRequired,
}
export default Header
