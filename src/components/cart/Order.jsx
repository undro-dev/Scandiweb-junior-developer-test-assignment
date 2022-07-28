import { useSelector } from 'react-redux';
import { selectCurrentCurrency } from '../../features/current-currency/current-curency-slice';

export const CartTotal = ({ cart }) => {
	const quantity = cart.reduce((sum, cur) => sum + cur.quantity, 0);

	const currentCurrency = useSelector(selectCurrentCurrency);

	const currentPrice = (array, currentCurrency) => {
		return array.find(el => el.currency.symbol === currentCurrency).amount;
	};

	const total = cart.reduce(
		(sum, current) =>
			sum + current.quantity * currentPrice(current.prices, currentCurrency),
		0
	);

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
