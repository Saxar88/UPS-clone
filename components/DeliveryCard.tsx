import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Card, Divider, Icon } from '@rneui/themed';

type Props = { order: Order };

const DeliveryCard = ({ order }: Props) => {
	const tw = useTailwind();

	return (
		<Card
			containerStyle={[
				tw('my-2 rounded-lg'),
				{
					padding: 0,
					paddingTop: 16,
					backgroundColor: '#59c1cc',
					shadowColor: 'black',
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.2,
					shadowRadius: 4,
				},
			]}>
			<View>
				<Icon name='box' type='entypo' size={50} color='white' />
				<View>
					<Text
						style={tw('text-xs text-center uppercase text-white font-bold')}>
						{order.carrier} – {order.trackingId}
					</Text>
					<Text style={tw('text-lg text-center text-white font-bold')}>
						Expected delivery: {new Date(order.createdAt).toLocaleDateString()}
					</Text>
				</View>
				<Divider color='white' style={tw('my-3')} />
				<View style={tw('mx-auto')}>
					<Text style={tw('text-base text-center text-white font-bold')}>
						Address:
					</Text>
					<Text style={tw('text-sm text-center text-white')}>
						{order.Address}, {order.City}
					</Text>
					<Text style={tw('text-sm text-center italic text-white')}>
						Shipping cost: €{order.shippingCost}
					</Text>
				</View>
			</View>
			<Divider color='white' style={tw('my-3')} />
			<View style={tw('p-5')}>
				{order.trackingItems.items.map((item) => (
					<View style={tw('flex-row justify-between items-center')}>
						<Text style={tw('text-sm font-bold text-white')}>{item.name}</Text>
						<Text style={tw('text-sm text-white')}>x {item.quantity}</Text>
					</View>
				))}
			</View>
		</Card>
	);
};

export default DeliveryCard;
