import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import Logo from '../../assets/Logo'
import './styles.scss'

const Navbar = () => {
  const isHome = window.location.pathname === '/'
  const isCart = window.location.pathname === '/cart'

  return (
    <nav className='nav'>
      <Logo className="logo" />
      <div className="links">
        <div>
          <a href="/" className={['link', isHome? 'selected' : ''].join(' ')}>
            Página inicial
          </a>
        </div>
      </div>
      <div className="search">

      </div>
      <div className="icons">
        <a href="/cart">
          {isCart ?
            <RiShoppingCartFill className='icon' />
            :
            <RiShoppingCart2Line className='icon' />
          }
        </a>
      </div>
    </nav>
  )
}

export default Navbar