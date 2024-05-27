import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <a href='#'>
          <FaFacebook className="light-icon" />        
        </a>
        <a href='#'>
          <FaTwitter className="light-icon" />
        </a>
        <a href='#'>
          <FaInstagram className="light-icon" />
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} Trato Tech. Todos os direitos reservados.
      </span>
    </footer>
  )
}

export default Footer