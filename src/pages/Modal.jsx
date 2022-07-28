import { useSelector } from 'react-redux';
import { ModalItemCart } from '../components/modal-window/ModalItem';
import { selectCart } from '../features/cart/cart-slice';
import { selectModal } from '../features/modal/modal-slice';
import { selectCurrentCurrency } from '../features/current-currency/current-curency-slice.js';
import { Total } from '../components/modal-window/Total';

import '../styles/Modal.scss';
import { ModalButtons } from '../components/modal-window/Modal-buttons';

export const Modal = () => {
	const cart = useSelector(selectCart);
	const quantity = cart.reduce((sum, cur) => sum + cur.quantity, 0);
	const currentCurrency = useSelector(selectCurrentCurrency);
	const openModal = useSelector(selectModal);

	return (
		<div>
			{openModal.openModaL ? (
				<div className='modal'>
					<div className='container modal-container'>
						<div className='modal-content'>
							<p className='modal-title'>
								<b>My Bag, </b>
								{quantity} items{' '}
							</p>
							{cart.map(el => (
								<ModalItemCart
									key={el.id}
									{...el}
									currentCurrency={currentCurrency}
								/>
							))}
							<Total />
							<ModalButtons />
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};
