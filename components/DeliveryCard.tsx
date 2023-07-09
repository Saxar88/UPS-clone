import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Card, Divider, Icon } from '@rneui/themed';
import MapView, { Marker } from 'react-native-maps';

type Props = { order: Order; fullWidth?: boolean };

const DeliveryCard = ({ order, fullWidth }: Props) => {
	const tw = useTailwind();

	return (
		<Card
			containerStyle={[
				tw(`${fullWidth ? 'm-0 rounded-none' : 'my-2 rounded-lg'}`),
				{
					padding: 0,
					paddingTop: 16,
					backgroundColor: fullWidth ? '#eb6a7c' : '#59c1cc',
					shadowColor: 'black',
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.2,
					shadowRadius: 4,
				},
			]}>
			<View style={fullWidth && { height: '100%' }}>
				<Icon name='box' type='entypo' size={50} color='white' />
				<View style={tw('items-start p-5 -mt-3')}>
					<View style={tw('mx-auto')}>
						<Text
							style={tw('text-xs text-center uppercase text-white font-bold')}>
							{order.carrier} – {order.trackingId}
						</Text>
						<Text style={tw('text-lg text-center text-white font-bold')}>
							Expected delivery:{' '}
							{new Date(order.createdAt).toLocaleDateString()}
						</Text>
						<Divider color='white' style={tw('my-3')} />
					</View>
					<View style={tw('mx-auto pb-5')}>
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
						<View
							key={item.item_id}
							style={tw('flex-row justify-between items-center')}>
							<Text style={tw('text-sm font-bold text-white')}>
								{item.name}
							</Text>
							<Text style={tw('text-sm text-white')}>x {item.quantity}</Text>
						</View>
					))}
				</View>
				<MapView
					initialRegion={{
						latitude: order.Lat,
						longitude: order.Lng,
						latitudeDelta: 0.005,
						longitudeDelta: 0.005,
					}}
					style={[tw('w-full grow'), !fullWidth && { height: 200 }]}>
					{order.Lat && order.Lng && (
						<Marker
							coordinate={{ latitude: order.Lat, longitude: order.Lng }}
							title='Delivery location'
							description={order.Address}
							identifier='destination'
						/>
					)}
				</MapView>
			</View>
		</Card>
	);
};

export default DeliveryCard;
