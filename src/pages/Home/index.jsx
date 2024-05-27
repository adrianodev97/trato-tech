import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Oclock from '../../assets/initial.png';
import Header from '../../components/Header';
import { categoriesSelector } from '../../store/reducers/categoriesSlice';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate()
  const categories = useSelector(categoriesSelector)

  return (
    <div>
      <Header 
        title={'Classificados Tech'}
        description={'Compre diversos tipos de produtos no melhor site do Brasil!'}
        image={Oclock} 
        className='home-header'
      />
      <div className="categories">
        <div className="categories-title">
          <h2>Categorias</h2>
        </div>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} onClick={() => navigate(`/category/${category.id}`)}>
              <img src={category.thumbnail} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home