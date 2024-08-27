import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart } from '../../store/cart';
import { toggleLike } from '../../store/produce';

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => Object.values(state.cart).find(item => +item.id === produce.id))

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => {
              dispatch(toggleLike(produce))
          }}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => {
              if (cartItem) {
                dispatch(updateCart(cartItem.id, cartItem.count + 1))
              } else {
                dispatch(addToCart(produce.id))
              }
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
