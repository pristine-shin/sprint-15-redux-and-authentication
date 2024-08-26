import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart';

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => Object.values(state.cart).find(item => +item.id === produce.id))

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => {
            dispatch(addToCart(produce.id))
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
