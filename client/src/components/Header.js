import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between h-10 py-3 mb-3 ">
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
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fas fa-utensils text-lg leading-lg  opacity-75"></i><span className="ml-2">Menu</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fas fa-shopping-cart text-lg leading-lg"></i><span className="ml-2">Cart</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fas fa-heart text-lg leading-lg  opacity-75"></i><span className="ml-2">Wish List</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header;
