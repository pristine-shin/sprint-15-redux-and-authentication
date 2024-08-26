import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cart';
import { updateCart } from '../../store/cart';


function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => {
            dispatch(updateCart(item.id, item.count + 1))
          }}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
            dispatch(updateCart(item.id, item.count - 1))
          }}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
            dispatch(removeFromCart(item.id))
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
