import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export default function MenuItem({ dish }) {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => navigation.navigate('Dish details', { id: dish.id })}
			style={{
				width: '100%',
				padding: 1.5,
				elevation: 20,
			}}
		>
			<View style={styles.container}>
				<View style={styles.info}>
					<Text style={styles.name}>{dish.name}</Text>
					<Text style={styles.description} numberOfLines={3}>
						{dish.description}
					</Text>
					<Text style={styles.price}>KES &#8226; {dish.price.toFixed(1)}</Text>
				</View>
				<Image source={{ uri: dish.image }} style={styles.image} />
			</View>
		</Pressable>
	);
}

// StyleSheet

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 10,
		backgroundColor: 'white',
		width: '98%',
		alignSelf: 'center',
		marginBottom: 10,
		padding: 6,
	},
	info: {
		paddingTop: 8,
		paddingLeft: 8,
		width: '60%',
		justifyContent: 'space-evenly',
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 13,
		fontWeight: '400',
		marginVertical: 4,
	},
	price: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 10,
	},
});
