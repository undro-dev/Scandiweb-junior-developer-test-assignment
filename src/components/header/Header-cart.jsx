import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../features/cart/cart-slice';
import { toggleModal } from '../../features/modal/modal-slice';

export const HeaderCart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	const quantity = cart.reduce((sum, cur) => sum + cur.quantity, 0);

	useEffect(() => {
		if (!cart.length) {
			dispatch(toggleModal(false));
		}
	}, [cart, dispatch]);

	return (
		<div className='header-cart' onClick={() => dispatch(toggleModal())}>
			{quantity ? <div className='cart-count'>{quantity}</div> : null}
		</div>
	);
};
