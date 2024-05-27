import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './styles.scss';

const DefaultPage = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className="container-outlet">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  )
}

export default DefaultPage