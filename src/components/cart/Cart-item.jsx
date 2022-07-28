import { useSelector } from 'react-redux';
import { selectCurrentCurrency } from '../../features/current-currency/current-curency-slice';
import { AttributeOverlay } from '../modal-window/Attribute-overlay';
import { ModalItemCounter } from '../modal-window/Modal-item-counter';
import { CartImages } from './Cart-images';

export const CartItem = props => {
	const { name, id, prices, attributes, quantity, gallery } = props;

	const currentCurrency = useSelector(selectCurrentCurrency);

	const actualPrice = prices.filter(
		price => price.currency.symbol === currentCurrency
	)[0];

	return (
		<div className='modal-item-cart'>
			<div className='modal-item-cart__description main-cart-description'>
				<h6>{name}</h6>
				<p>{id}</p>
				<span>
					{actualPrice.currency.symbol}
					{actualPrice.amount}
				</span>
				{attributes.map(atr => (
					<AttributeOverlay
						key={atr.name}
						attribute={atr}
						{...props}
						{...atr}
					/>
				))}
			</div>
			<ModalItemCounter quantity={quantity} name={name} />
			<CartImages images={gallery} name={name} />
		</div>
	);
};
