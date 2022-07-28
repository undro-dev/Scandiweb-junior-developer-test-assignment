import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../features/cart/cart-slice';

export const ProductItem = props => {
	const dispatch = useDispatch();
	const { id, gallery, prices, currentCurrency } = props;

	const actualPrice = prices.filter(
		price => price.currency.symbol === currentCurrency
	)[0];

	const handleClick = e => {
		const linkOnProduct = e.target.closest('.product-link');

		if (
			linkOnProduct.classList.contains('active') &&
			e.target.classList.contains('circle')
		) {
			e.preventDefault();
		} else if (linkOnProduct.classList.contains('active')) {
		} else {
			e.preventDefault();
			linkOnProduct.classList.toggle('active');
			linkOnProduct.querySelector('.circle').classList.toggle('visible');
		}
	};

	return (
		<Link
			className='product-link'
			data-product={id}
			to={id}
			onClick={e => handleClick(e)}
		>
			<div className='product-card'>
				<img className='product-card__img' src={gallery[0]} alt={id}></img>
				<p className='product-card__id'>{id}</p>
				<div className='product-card__price'>
					<span className='symbol'>{actualPrice.currency.symbol}</span>
					<span className='label'>{actualPrice.amount}</span>
				</div>
				<button
					className='circle'
					onClick={() => dispatch(addProductToCart(props))}
				></button>
			</div>
		</Link>
	);
};
