import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_ALL_CATEGORIES } from '../../config.js';

export const HeaderNav = () => {
	const { loading, data = [] } = useQuery(GET_ALL_CATEGORIES);

	return (
		<nav className='header-nav'>
			{loading ? null : (
				<ul>
					{data.categories.map(el => (
						<Link to={`products/${el.name}`} key={el.name}>
							<li>{el.name}</li>
						</Link>
					))}
				</ul>
			)}
		</nav>
	);
};
