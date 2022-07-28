import { CurrentProductForm } from './CurrentProductForm';
import { CurrentProductImage } from './CurrentProductImage';

export const CurrentProduct = props => {
	const { id, gallery } = props;

	return (
		<div className='product-wrapper'>
			<CurrentProductImage gallery={gallery} id={id} />
			<CurrentProductForm {...props} />
		</div>
	);
};
