import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../features/cart/cart-slice';
import { toggleModal } from '../../features/modal/modal-slice';

export const ModalButtons = () => {
	const dispatch = useDispatch();

	return (
		<div className='modal-btn'>
			<Link to={`cart`} onClick={() => dispatch(toggleModal())}>
				<button>View bag</button>
			</Link>

			<button
				onClick={() => {
					dispatch(toggleModal());
					dispatch(clearCart());
				}}
			>
				CHECK OUT
			</button>
		</div>
	);
};
