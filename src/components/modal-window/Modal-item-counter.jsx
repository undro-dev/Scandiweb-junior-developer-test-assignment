import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/cart/cart-slice';

export const ModalItemCounter = ({ name, quantity }) => {
	const dispatch = useDispatch();

	return (
		<div className='modal-item-cart__counter'>
			<button onClick={() => dispatch(increment(name))}>+</button>
			<span>{quantity}</span>
			<button onClick={() => dispatch(decrement(name))}>-</button>
		</div>
	);
};
