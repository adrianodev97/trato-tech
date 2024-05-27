import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Item from '../../components/Item';
import { categoriesSelector } from '../../store/reducers/categoriesSlice';
import { itemsSelector } from '../../store/reducers/itemsSlice';
import { searchSelector } from '../../store/reducers/searchSlice';
import './styles.scss';

const Category = () => {
  const { categoryName } = useParams()
  const category = useSelector(categoriesSelector).find(category => category.id === categoryName)
  const search = useSelector(searchSelector)
  const items = useSelector(itemsSelector).filter(item => {
    const regexp = new RegExp(search, 'i')
    return item.category === categoryName && item.title.match(regexp)
  })

  return (
    <div>
      <Header 
        title={category.name}
        description={category.description}
        image={category.header} 
        className='header'
      />
      <div className="items">
        {items?.map(item => (<Item key={item.id} {...item} />))}
      </div>
    </div>
  )
}

export default Category