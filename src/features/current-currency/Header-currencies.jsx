import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_ALL_CURRENCIES } from '../../config.js';
import { setCurrentCurrency } from './current-curency-slice.js';

export const HeaderCurrencies = () => {
	const { loading, data = [] } = useQuery(GET_ALL_CURRENCIES);

	const dispatch = useDispatch();

	const handleCurrency = e => {
		dispatch(setCurrentCurrency(e.target.value));
	};

	return (
		<select
			className='header-select'
			name='currencies-select'
			onChange={e => handleCurrency(e)}
		>
			{loading
				? null
				: data.currencies.map(el => (
						<option key={el.label}>{el.symbol}</option>
				  ))}
		</select>
	);
};
