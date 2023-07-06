import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { CustomersScreenNavigationProp } from '../screens/CustomersScreen';
import { Card, Icon } from '@rneui/themed';

type Props = { userId: string; name: string; email: string };

const CustomerCard = ({ email, name, userId }: Props) => {
	const { loading, error, orders } = useCustomerOrders(userId);
	const tw = useTailwind();
	const navigation = useNavigation<CustomersScreenNavigationProp>();

	return (
		<TouchableOpacity>
			<Card containerStyle={tw('p-5 rounded-lg')}>
				<View>
					<View style={tw('flex-row justify-between')}>
						<View>
							<Text style={tw('text-2xl font-bold')}>{name}</Text>
							<Text style={tw('text-sm text-[#59c1cc]')}>ID: {userId}</Text>
						</View>

						<View style={tw('flex-row items-center justify-end')}>
							<Text style={tw('text-[#59c1cc]')}>
								{loading ? 'Loading...' : `${orders.length} x`}
							</Text>
							<Icon
								style={tw('mb-5 ml-auto')}
								name='box'
								type='entypo'
								color='#59c1cc'
								size={50}
							/>
						</View>
					</View>
				</View>
				<Card.Divider />
				<Text>{email}</Text>
			</Card>
		</TouchableOpacity>
	);
};

export default CustomerCard;
