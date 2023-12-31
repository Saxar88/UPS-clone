import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';
import OrderScreen from '../screens/OrderScreen';

export type RootStackParamList = {
	Home: undefined;
	MyModal: { userId: string; name: string };
	Order: { order: Order };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen name='Home' component={TabNavigator} />
			</RootStack.Group>
			<RootStack.Group screenOptions={{ presentation: 'modal' }}>
				<RootStack.Screen
					options={{ headerShown: false }}
					name='MyModal'
					component={ModalScreen}
				/>
			</RootStack.Group>
			<RootStack.Group>
				<RootStack.Screen name='Order' component={OrderScreen} />
			</RootStack.Group>
		</RootStack.Navigator>
	);
};

export default RootNavigator;
