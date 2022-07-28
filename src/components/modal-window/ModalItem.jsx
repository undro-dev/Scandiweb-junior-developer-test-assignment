import { AttributeOverlay } from './Attribute-overlay';
import { ModalItemCounter } from './Modal-item-counter';
import { ModalItemImage } from './ModalItemImage';

export const ModalItemCart = props => {
	const { gallery, name, prices, currentCurrency, attributes, quantity, id } =
		props;

	const actualPrice = prices.filter(
		price => price.currency.symbol === currentCurrency
	)[0];

	return (
		<div className='modal-item-cart'>
			<div className='modal-item-cart__description'>
				<p>{name}</p>
				<p>{id}</p>
				<span>
					{actualPrice.currency.symbol}
					{actualPrice.amount}
				</span>
				{attributes.map(atr => (
					<AttributeOverlay
						key={atr.name}
						{...props}
						{...atr}
						attribute={atr}
					/>
				))}
			</div>
			<ModalItemCounter quantity={quantity} name={name} />
			<ModalItemImage imgSrc={gallery[0]} name={name} />
		</div>
	);
};
