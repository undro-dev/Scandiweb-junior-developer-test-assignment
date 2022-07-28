import { gql } from '@apollo/client';

const GET_ALL_CATEGORIES = gql`
	query {
		categories {
			name
		}
	}
`;

const GET_ALL_CURRENCIES = gql`
	query {
		currencies {
			label
			symbol
		}
	}
`;

const GET_ALL_PRODUCTS = gql`
	query {
		categories {
			name
			products {
				id
				name
				gallery
				attributes {
					name
					items {
						value
					}
				}
				prices {
					amount
					currency {
						label
						symbol
					}
				}
			}
		}
	}
`;
const GET_CURRENCY_PRODUCT = gql`
	query Product($id: String!) {
		product(id: $id) {
			id
			name
			inStock
			category
			description
			gallery
			brand
			prices {
				currency {
					label
					symbol
				}
				amount
			}
			attributes {
				id
				items {
					displayValue
					value
					id
				}
			}
		}
	}
`;

export {
	GET_ALL_CATEGORIES,
	GET_ALL_CURRENCIES,
	GET_ALL_PRODUCTS,
	GET_CURRENCY_PRODUCT,
};
