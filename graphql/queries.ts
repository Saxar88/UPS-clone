import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
	query GetCustomers {
		getCustomers {
			value {
				email
				name
			}
			name
		}
	}
`;

export const GET_ORDERS = gql`
	query getTrackingItems {
		getOrders {
			name
			value {
				Address
				City
				Lat
				Lng
				carrier
				createdAt
				shippingCost
				trackingId
				trackingItems {
					customer {
						email
						name
					}
					customer_id
					items {
						item_id
						name
						price
						quantity
					}
				}
			}
		}
	}
`;
