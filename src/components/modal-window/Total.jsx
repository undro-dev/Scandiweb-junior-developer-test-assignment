import { useSelector } from 'react-redux';
import { selectCart } from '../../features/cart/cart-slice';
import { selectCurrentCurrency } from '../../features/current-currency/current-curency-slice';

export const Total = () => {
	const cart = useSelector(selectCart);
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
		<div className='total'>
			<span className='total__text'>Total</span>
			<span className='total__price'>
				{currentCurrency}
				{total.toFixed(2)}
			</span>
		</div>
	);
};
