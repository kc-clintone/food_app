import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	Pressable,
	FlatList,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { React, useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Restaurant, Dish } from '../../models';
import MenuItem from '../DishListItem';
import Cart from './../../screens/Cart/index';
import { useBasketContext } from '../../contexts/BasketContext';

export default function RestaurantDetail() {
	// store restaurants in state
	const [restaurant, setRestaurant] = useState(null);

	// dishes state
	const [dishes, setDishes] = useState([]);

	// initialize route
	const route = useRoute();

	// initialize navigation
	const navigation = useNavigation();

	// pass restaurants id from routes
	const id = route.params?.id;

	// use the restaurant from basket context to focus on one restaurant ata time
	const { setRestaurant: setBasketRestaurant, basket, basketDishes } = useBasketContext();

	// render the restaurant detail from use effect
	useEffect(() => {
		if (!id) {
			return;
		}
		// reset all available restaurants before creating new basket
		setBasketRestaurant(null);

		//fetch restaurant by id
		DataStore.query(Restaurant, id).then(setRestaurant);

		// fetch dishes matching restaurant id
		DataStore.query(Dish, (dish) => dish.restaurantID('eq', id)).then(setDishes);
	}, [id]);

	useEffect(() => {
		setBasketRestaurant(restaurant);
	}, [restaurant]);
	// show a loading state if there's  no restaurants to render
	if (!restaurant) {
		return <ActivityIndicator size={'large'} color='gray' />;
	}

	return (
		<View style={{ flex: 1 }}>
			{/* ---header component--- */}
			<View style={styles.header}>
				<TouchableOpacity style={styles.backButton}>
					<MaterialCommunityIcon
						name={'arrow-left'}
						size={18}
						onPress={() => navigation.goBack()}
					/>
				</TouchableOpacity>
				{basket && (
					<TouchableOpacity style={styles.CartButton}>
						<View
							style={{
								top: -6,
								right: -10,
								width: 17,
								height: 17,
								backgroundColor: 'red',
								zIndex: 999,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 15,
								position: 'absolute',
							}}
						>
							<Text
								style={{
									padding: 2,
									color: 'white',
									fontSize: 9,
								}}
							>
								{basketDishes.length}
							</Text>
						</View>
						<MaterialCommunityIcon
							name={'cart'}
							size={18}
							onPress={() => navigation.navigate('Cart')}
						/>
					</TouchableOpacity>
				)}

				<Image
					source={{
						uri: restaurant.image,
					}}
					style={styles.image}
				/>
				<View style={styles.infoContent}>
					<Text style={styles.title}>{restaurant.name}</Text>
					<View style={styles.info}>
						<Text style={styles.textStyle}>
							KES &#8226; {restaurant.deliveryFee.toFixed(1)}
						</Text>

						<View style={{ flexDirection: 'row' }}>
							<MaterialCommunityIcon
								name={'alarm'}
								size={17}
								style={{ marginRight: 3, color: 'green' }}
							/>
							<Text style={styles.textStyle}>
								{restaurant.minDeliverytime} - {restaurant.maxDeliveryTime} mins
							</Text>
						</View>

						<View style={{ flexDirection: 'row' }}>
							<Text style={styles.textStyle}>{restaurant.rating.toFixed(1)} </Text>
							<MaterialCommunityIcon
								name={'star'}
								size={18}
								style={{ color: 'yellow' }}
							/>
						</View>
					</View>
				</View>
			</View>

			<View>
				<Text style={styles.Menutitle}>Popular menus</Text>
			</View>

			{/* ===menu item/dish item=== */}

			<FlatList
				data={dishes}
				renderItem={({ item }) => <MenuItem dish={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

// Style

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#fff',
	},
	image: {
		width: '100%',
		height: 230,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	info: {
		width: '55%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 6,
	},
	infoContent: {
		padding: 5,
	},
	textStyle: {
		fontSize: 13,
		fontWeight: 'normal',
		color: 'grey',
	},
	backButton: {
		position: 'absolute',
		color: '#111',
		backgroundColor: 'white',
		width: 30,
		height: 30,
		top: 30,
		left: 15,
		zIndex: 10,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	CartButton: {
		position: 'absolute',
		color: '#111',
		backgroundColor: 'white',
		width: 30,
		height: 30,
		top: 30,
		right: 15,
		zIndex: 10,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	Menutitle: {
		fontSize: 19,
		fontWeight: 'bold',
		padding: 8,
	},
});
