import { useSelector } from 'react-redux';
import { CartItem } from '../components/cart/Cart-item';
import { selectCart } from '../features/cart/cart-slice';
import '../styles/Modal.scss';
import '../styles/Cart.scss';
import { CartTotal } from '../components/cart/Cart-total';
import { OrderButton } from '../components/cart/Order-btn';
export const Cart = () => {
	const cart = useSelector(selectCart);

	return (
		<main className='container cart-container'>
			{cart.map(el => (
				<CartItem {...el} />
			))}
			<CartTotal cart={cart} />
			<OrderButton />
		</main>
	);
};
