import { View } from 'react-native';
import React from 'react';
import RestaurantDetail from '../../components/header';

// remember to refactor the code
export default function DetailScreen() {
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<RestaurantDetail />
		</View>
	);
}
