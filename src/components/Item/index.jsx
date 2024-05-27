import PropTypes from 'prop-types';
import {
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineHeart,
} from 'react-icons/ai';
import {
  FaCartPlus,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addOrIncreaseItem, cartSelector, decreseItemAmount } from '../../store/reducers/cartSlice';
import { toggleFavorite } from '../../store/reducers/itemsSlice';
import './styles.scss';

const Item = ({ id, title, image, price, amount, description, favorite, cart }) => {
  const dispatch = useDispatch();
  const isOnCart = useSelector(cartSelector).some(item => item.id === id)

  const handleAddOrIncreadeToCart = () => {
    dispatch(addOrIncreaseItem(id));
  }

  const handleDecreaseCartItem = () => {
    dispatch(decreseItemAmount(id));
  }

  const handleFavorite = () => {
    dispatch(toggleFavorite(id));
  }

  return (
    <div className={['item', cart ? 'item-on-cart' : ''].join(' ')}>
      <div className="item-image">
        <img src={image} alt={title} />
      </div>
      <div className="item-description">
        <div className="item-title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="item-info">
          <div className="item-price">
            R$ {price.toFixed(2).toString().replace('.', ',')}
          </div>
          <div className="item-actions">
            {favorite ?
              <AiFillHeart className='dark-icon item-action' color='#ff0000' onClick={handleFavorite} /> 
              :
              <AiOutlineHeart className='dark-icon item-action' onClick={handleFavorite} />
            }
            {isOnCart && cart ?
              <div className='amount'>
                Quantidade: 
                <AiFillMinusCircle className='amount-icon' onClick={handleDecreaseCartItem} />
                <span>{String(amount)}</span>
                <AiFillPlusCircle className='amount-icon' onClick={handleAddOrIncreadeToCart} />
              </div>
            :
              <FaCartPlus className='dark-icon item-action' color={isOnCart ? "#1875E8" : ''} onClick={handleAddOrIncreadeToCart} />
          }
          </div>
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number,
  description: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  cart: PropTypes.bool,
};

export default Item