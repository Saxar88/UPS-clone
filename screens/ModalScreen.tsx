import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn';
import {
	CompositeNavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useCustomerOrders from '../hooks/useCustomerOrders';
import DeliveryCard from '../components/DeliveryCard';

type ModalScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList>,
	NativeStackNavigationProp<RootStackParamList, 'MyModal'>
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'MyModal'>;

const ModalScreen = () => {
	const tw = useTailwind();
	const navigation = useNavigation<ModalScreenNavigationProp>();
	const {
		params: { name, userId },
	} = useRoute<ModalScreenRouteProp>();
	const { loading, error, orders } = useCustomerOrders(userId);

	return (
		<View>
			<TouchableOpacity
				onPress={navigation.goBack}
				style={tw('absolute top-5 right-5 z-10')}>
				<Icon name='closecircle' type='antdesign' />
			</TouchableOpacity>
			<View style={tw('mt-5')}>
				<View style={tw('py-5 border border-b border-[#59c1cc]')}>
					<Text style={tw('text-xl text-center font-bold text-[#59c1cc]')}>
						{name}
					</Text>
					<Text style={tw('text-center text-sm italic')}>deliveries</Text>
				</View>
			</View>
			<FlatList
				data={orders}
				keyExtractor={(order) => order.trackingId}
				renderItem={({ item: order }) => <DeliveryCard order={order} />}
				contentContainerStyle={tw('pb-52')}
			/>
		</View>
	);
};

export default ModalScreen;
