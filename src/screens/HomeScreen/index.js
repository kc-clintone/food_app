import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import RestaurantItem from '../../components/RestaurantItems/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';

export default function HomeScreen() {
	// usestate that updates the restaurants states
	const [restaurants, setRestaurants] = useState([]);

	// useeffect for updating the UI after fetching data from backend api
	useEffect(async () => {
		await DataStore.query(Restaurant).then(setRestaurants);
	}, []);

	// returning restaurant component for rendering

	if (!restaurants) {
		return <ActivityIndicator />;
	}
	return (
		<FlatList
			data={restaurants}
			renderItem={({ item }) => <RestaurantItem restaurant={item} />}
			showsVerticalScrollIndicator={false}
		/>
	);
}

// styles

const styles = StyleSheet.create({});
