import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
	Home: undefined;
	MyModal: { userId: String; name: String };
	Order: { order: any };
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen name='Home' component={TabNavigator} />
			</RootStack.Group>
		</RootStack.Navigator>
	);
};

export default RootNavigator;
