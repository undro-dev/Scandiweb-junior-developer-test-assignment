import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { CurrentProduct } from '../components/CurrentProduct';
import { GET_CURRENCY_PRODUCT } from '../config';
import { useSelector } from 'react-redux';
import { selectCurrentCurrency } from '../features/current-currency/current-curency-slice.js';
import '../styles/Details.scss';

export const Details = () => {
	const { id } = useParams();
	const { data, loading } = useQuery(GET_CURRENCY_PRODUCT, {
		variables: { id },
	});
	const currentCurrency = useSelector(selectCurrentCurrency);

	if (!loading) {
		const { product } = data;

		return (
			<main className='container main-container-product'>
				<CurrentProduct currentCurrency={currentCurrency} {...product} />
			</main>
		);
	}
};
