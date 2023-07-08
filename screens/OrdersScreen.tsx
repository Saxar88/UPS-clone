import React, { useLayoutEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import {
	CompositeNavigationProp,
	useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';
import { useTailwind } from 'tailwind-rn';
import useOrders from '../hooks/useOrders';
import { Button, Image } from '@rneui/themed';
import OrderCard from '../components/OrderCard';

export type OrdersScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, 'Orders'>,
	NativeStackNavigationProp<RootStackParamList>
>;

const OrdersScreen = () => {
	const tw = useTailwind();
	const navigation = useNavigation<OrdersScreenNavigationProp>();
	const { loading, error, orders } = useOrders();
	const [ascending, setAscending] = useState<boolean>(false);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
			tabBarLabel: ({ focused, color }) => (
				<Text style={{ fontSize: 10, color: focused ? '#eb6a7c' : color }}>
					Orders
				</Text>
			),
		});
	}, []);

	return (
		<ScrollView style={tw('bg-[#eb6a7c]')}>
			<Image
				source={{ uri: 'https://links.papareact.com/m51' }}
				containerStyle={tw('w-full h-64')}
				PlaceholderContent={<ActivityIndicator />}
			/>
			<View>
				<Button
					onPress={() => setAscending(!ascending)}
					color='pink'
					titleStyle={{ color: 'gray', fontWeight: '400' }}
					style={tw('px-5 py-2')}>
					{ascending ? 'Showing: Oldest first' : 'Showing: Newest first'}
				</Button>
				{orders
					?.sort((a, b) => {
						if (ascending) {
							return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
						} else {
							return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
						}
					})
					.map((order) => (
						<OrderCard key={order.trackingId} item={order} />
					))}
			</View>
		</ScrollView>
	);
};

export default OrdersScreen;
