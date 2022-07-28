import { useSelector } from 'react-redux';
import { selectCurrentCurrency } from '../../features/current-currency/current-curency-slice';

export const CartTotal = ({ cart }) => {
	const currentCurrency = useSelector(selectCurrentCurrency);
	const quantity = cart.reduce((sum, cur) => sum + cur.quantity, 0);

	const getCurrentPrice = (array, currentCurrency) => {
		return array
			.filter(el => el.currency.symbol === currentCurrency)
			.map(item => item.amount);
	};

	const total = cart.reduce((sum, curr) => {
		return sum + curr.quantity * getCurrentPrice(curr.prices, currentCurrency);
	}, 0);

	return (
		<div className='cart-total'>
			<p>
				Quantity: <b>{quantity}</b>
			</p>
			<p>
				Total:{' '}
				<b>
					{currentCurrency}
					{total.toFixed(2)}
				</b>
			</p>
		</div>
	);
};
