import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo'
import Search from '../Search'
import './styles.scss'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'
  const isCart = location.pathname === '/cart'

  return (
    <nav className='nav'>
      <Logo className="logo" onClick={() => navigate('/')} />
      <div className="links">
        <div>
          <Link to="/" className={['link', isHome? 'selected' : ''].join(' ')}>
            Página inicial
          </Link>
        </div>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="icons">
        <Link to="/cart">
          {isCart ?
            <RiShoppingCartFill className='light-icon' />
            :
            <RiShoppingCart2Line className='light-icon' />
          }
        </Link>
      </div>
    </nav>
  )
}

export default Navbar