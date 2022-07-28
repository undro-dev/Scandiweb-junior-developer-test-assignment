import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { ColorAttribute } from './ColorAttribute';
import { Attribute } from './Attribute';
import { addProductToCart } from '../features/cart/cart-slice';

export const CurrentProductForm = props => {
	const dispatch = useDispatch();

	const { id, name, attributes, currentCurrency, prices, description } = props;

	const initialValues = {};

	attributes.forEach(el => {
		if (!initialValues.hasOwnProperty(el.id)) {
			initialValues[el.id] = '';
		}
	});

	const actualPrice = prices.filter(
		price => price.currency.symbol === currentCurrency
	)[0];

	return (
		<div className='product-form'>
			<h2>{name}</h2>
			<p className='product-id'>{id}</p>
			<Formik
				initialValues={initialValues}
				validate={values => {
					const errors = {};
					for (let key in values) {
						if (values[key] === '') errors.message = 'Select all options!!!';
					}
					return errors;
				}}
				onSubmit={values => {
					if (values) {
						const newItem = {
							...props,
							choiceUser: Object.values(values),
						};
						dispatch(addProductToCart(newItem));
					} else {
						console.log('sdvujkm');
					}
				}}
			>
				{() => (
					<Form>
						{attributes.map(el => (
							<>
								<h6>{el.id}:</h6>
								{el.id === 'Color' ? (
									<ColorAttribute name={el.id} colors={el.items} />
								) : (
									<Attribute name={el.id} attributes={el.items} />
								)}
							</>
						))}
						<h6 className='price-title'>Price:</h6>
						<span className='symbol'>{actualPrice.currency.symbol}</span>
						<span className='label'>{actualPrice.amount}</span>
						<button className='form-submit' type='submit'>
							ADD TO CART
						</button>
					</Form>
				)}
			</Formik>
			<p
				className='product-description'
				dangerouslySetInnerHTML={{ __html: description }}
			></p>
		</div>
	);
};
