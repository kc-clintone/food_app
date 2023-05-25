import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantItem({ restaurant }) {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate('RestaurantDetailsScreen', { id: restaurant?.id });
	};

	return (
		<View>
			<Pressable onPress={onPress} style={styles.mainContainer}>
				<TouchableOpacity style={{ zIndex: 10 }}>
					<MaterialCommunityIcon name={'heart'} style={styles.iconStyles} />
				</TouchableOpacity>
				<Image
					source={{
						uri: restaurant?.image,
					}}
					style={styles.imageStyles}
				/>
				<View style={styles.infoStyles}>
					<View>
						<Text style={styles.restaurantTitle}>{restaurant?.name}</Text>
						<View style={styles.restaurantInfo}>
							<Text style={styles.textStyle}>
								KES &#8226; {restaurant?.deliveryFee.toFixed(1)}
							</Text>

							<View style={{ flexDirection: 'row' }}>
								<MaterialCommunityIcon
									name={'alarm'}
									size={24}
									style={{
										marginRight: 5,
										color: 'maroon',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								/>
								<Text style={styles.textStyle}>
									{restaurant?.minDeliverytime} - {restaurant?.maxDeliveryTime} mins
								</Text>
							</View>
						</View>
					</View>

					<Text style={styles.restaurantRating}>{restaurant?.rating.toFixed(1)}</Text>
				</View>
			</Pressable>
		</View>
	);
}

// ---styles---

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#fff',
		borderRadius: 14,
		margin: 6,
	},
	imageStyles: {
		width: '100%',
		height: 200,
		alignSelf: 'center',
		borderTopLeftRadius: 14,
		borderTopRightRadius: 14,
	},
	infoStyles: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 10,
		marginHorizontal: 10,
	},
	restaurantTitle: {
		fontSize: 20,
		fontWeight: '500',
		paddingVertical: 5,
	},
	restaurantInfo: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	restaurantRating: {
		width: 35,
		height: 25,
		backgroundColor: '#f3f3f3',
		textAlign: 'center',
		justifyContent: 'space-around',
		borderRadius: 10,
	},
	textStyle: {
		fontSize: 13,
		color: 'grey',
	},
	iconStyles: {
		fontSize: 30,
		color: '#fff',
		position: 'absolute',
		top: 11,
		left: 10,
	},
});
