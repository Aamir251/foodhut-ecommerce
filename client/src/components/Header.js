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
        <ul className='xs:text-xs flex justify-between ml-auto pt-2 pr-10 text-sm text-center items-center'>
          <Link to="/"><li>Home</li></Link>
          <Link className='btn' to="/menu"><li>Shop Now</li></Link>
          {userInfo ? <Link to="/profile"><li>{userInfo.name}</li></Link> : 
            <Link to="/login">Sign In</Link>
          }
          <Link to="/cart"><li>Cart</li></Link>
          {userInfo && <Link onClick={logOutHandler}>Log Out</Link>}
        </ul>
      </nav>

      {/* <nav className=" flex flex-wrap items-center justify-between h-10 py-3 mb-3 ">
          <div className="md:container w-full mx-auto flex flex-wrap items-center justify-between xs:px-3">
            <div className="relative flex justify-between  lg:static xs:w-full md:w-full lg:w-auto">
              <div className='flex'>
                <img src="/images/logo.png" alt="Page logo" className="h-10 pr-3" />
                <Link to="/" className="text-lg font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase logo">
                  Food Hub
                  <div className='underline bg-secondary'></div>
                </Link>                  
              </div>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex nav-bg " : " hidden")
              }

            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    to="/menu"
                  >
                    <i className="fas fa-utensils text-lg leading-lg  opacity-75"></i><span className="ml-2">Menu</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                    to="/cart"
                  >
                    <i className="fas fa-shopping-cart text-lg leading-lg"></i><span className="ml-2">Cart</span>
                  </Link>
                </li>
                {userInfo ? <li className="nav-item"><Link className="px-3 py-2 flex items-center text-xs capitalize font-bold leading-snug hover:opacity-75" to="/profile">
                    <i className="fas fa-user text-lg leading-lg"></i><span className="ml-2">{userInfo.name}</span></Link>
                </li> : <li>
                <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    to="/login"
                  >
                    <i className="fas fa-heart text-lg leading-lg  opacity-75"></i><span className="ml-2">Login</span>
                  </Link>
                  </li>}
                {userInfo && <li className="nav-item cursor-pointer" onClick={logOutHandler}><span className="px-3 py-2 flex items-center text-xs capitalize font-bold leading-snug hover:opacity-75"><i className="fas fa-sign-out-alt text-lg leading-lg  opacity-75"></i>LOGOUT</span>
                </li>}
              </ul>
            </div>
          </div>
        </nav> */}
    </header>
  )
}

export default Header;
