import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const history = useHistory()
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout())
    history.push("/")
  }

  return (
    <header>
      <nav className='w-screen absolute'>
        <ul className='xs:text-xs flex justify-between ml-auto pt-4 xs:pr-5 md:pr-10 text-sm text-center items-center'>
        <li><Link to="/">Home</Link></li>
          <li><Link className='btn' to="/menu">Shop Now</Link></li>
          {userInfo ? <Link to="/profile"><li>{userInfo.name}</li></Link> : 
            <Link to="/login">Sign In</Link>
          }
          <Link to="/cart"><li>Cart</li></Link>
          {userInfo && <li onClick={logOutHandler}>Log Out</li>}
        </ul>
      </nav>

    </header>
  )
}

export default Header;
