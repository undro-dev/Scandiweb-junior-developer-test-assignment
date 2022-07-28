import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_ALL_PRODUCTS } from '../config';
import { ProductItem } from '../components/Products-item';
import { selectCurrentCurrency } from '../features/current-currency/current-curency-slice.js';

import '../styles/Products.scss';
import { useSelector } from 'react-redux';

export const Products = () => {
	const { category = 'all' } = useParams();

	const { loading, data } = useQuery(GET_ALL_PRODUCTS);
	const currentCurrency = useSelector(selectCurrentCurrency);

	if (!loading) {
		const { products } = data.categories.filter(el => el.name === category)[0];

		return (
			<main className='container main-container-products'>
				<h1>{category}</h1>
				<div className='products-wrapper'>
					{products.map(el => (
						<ProductItem
							key={el.id}
							{...el}
							currentCurrency={currentCurrency}
						/>
					))}
				</div>
			</main>
		);
	}
};
