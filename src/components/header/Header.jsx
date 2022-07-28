import { HeaderNav } from './Header-nav';
import { HeaderLogo } from '../Header-logo';
import { HeaderCart } from './Header-cart';
import { HeaderCurrencies } from '../../features/current-currency/Header-currencies';
import '../../styles/Header.scss';

const Header = () => {
	return (
		<header className='container header-container'>
			<HeaderNav />
			<HeaderLogo />
			<div className='currencies-cart'>
				<HeaderCart />
				<HeaderCurrencies />
			</div>
		</header>
	);
};

export { Header };
