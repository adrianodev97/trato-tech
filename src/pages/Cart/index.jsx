import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Item from '../../components/Item';
import { cartSelector, clearCart } from '../../store/reducers/cartSlice';
import { itemsSelector } from '../../store/reducers/itemsSlice';
import { searchSelector } from '../../store/reducers/searchSlice';
import './styles.scss';

const Cart = () => {
  const items = useSelector(itemsSelector)
  const search = useSelector(searchSelector)
  const cartItems = useSelector(cartSelector).reduce((reducedItens, cartItem) => {
    const regexp = new RegExp(search, 'i')
    const item = items.find(item => item.id === cartItem.id && item.title.match(regexp))
    reducedItens.push({
      ...item,
      amount: cartItem.amount
    })
    return reducedItens
  },[])

  const total = cartItems.reduce((reducedTotal, item) => {
    reducedTotal += item.price * item.amount
    return reducedTotal
  }, 0) || 0

  const dispatch = useDispatch()

  const handleCheckout = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <Header
        title="Carrinho de compras"
        description="Confira produtos que você adicionou ao carrinho."
      />
      <div className="cart">
        {cartItems.map(item => (item.id && <Item key={item.id} {...item} cart />))}
        <div className="total">
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {total.toFixed(2).toString().replace('.', ',')}</strong>
          </span>
        </div>
        <button className='checkout' onClick={handleCheckout}>
          Finalizar compra
        </button>
      </div>
    </div>
  )
}

export default Cart