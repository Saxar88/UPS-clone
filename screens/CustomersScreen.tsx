import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import SafeViewAndroid from '../components/SafeViewAndroid';

export default function CustomersScreen() {
	const tailwind = useTailwind();

	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<Text>CustomersScreen</Text>
		</SafeAreaView>
	);
}
