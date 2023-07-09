import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn';
import {
	CompositeNavigationProp,
	useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';

export type OrdersScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, 'Orders'>,
	NativeStackNavigationProp<RootStackParamList>
>;

type Props = { item: Order };

const OrderCard = ({ item }: Props) => {
	const tw = useTailwind();
	const navigation = useNavigation<OrdersScreenNavigationProp>();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Order', { order: item })}>
			<Card containerStyle={tw('px-5 rounded-lg')}>
				<View style={tw('flex-row justify-between items-center')}>
					<View>
						<Icon
							name='truck-delivery'
							type='material-community'
							color='#eb6a7c'
						/>
						<Text style={{ fontSize: 10 }}>
							{new Date(item.createdAt).toDateString()}
						</Text>
					</View>
					<View>
						<Text style={tw('text-gray-400 text-xs')}>
							{item.carrier} – {item.trackingId}
						</Text>
						<Text style={tw('text-gray-500 text-xl')}>
							{item.trackingItems.customer.name}
						</Text>
					</View>
					<View style={tw('flex-row items-center')}>
						<Text style={tw('text-sm text-[#eb6a7c]')}>
							{item.trackingItems.items.length} x
						</Text>
						<Icon name='box' type='feather' style={tw('ml-2')} />
					</View>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default OrderCard;
