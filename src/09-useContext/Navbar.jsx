import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div style={{ display: 'flex' }}>
        <Link to="/">Home</Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="/about">About</Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="/login">Login</Link>
    </div>
  )
}
