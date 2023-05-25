import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Pressable,
	Image,
	ActivityIndicator,
	Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Dish } from '../../models';
import { useBasketContext } from '../../contexts/BasketContext';

export default function DishDetailScreen() {
	// total price state manager
	const [quantity, setQuantity] = useState(0);

	// dish item state manager
	const [dish, setDish] = useState(null);

	// retrieve dish id from routes
	const route = useRoute();
	const id = route.params?.id;

	// ui manager with useeffect
	useEffect(() => {
		if (id) {
			DataStore.query(Dish, id).then(setDish);
		}
	}, [id]);

	// import addToBasket context hook
	const { addDishToBasket } = useBasketContext();

	// add to cart
	const addToCartHandler = async () => {
		await addDishToBasket(dish, quantity);
		// navigation
	};

	// reduce cart items
	const onRemoveItem = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	};

	// add cart items
	const onAddItem = () => {
		setQuantity(quantity + 1);
	};

	// compute total price
	const getTotal = () => {
		return (dish.price * quantity).toFixed(2);
	};

	const navigation = useNavigation();

	const exitScreen = async () => {
		await addToCartHandler();

		Alert.alert('Success!!', 'Added ' + quantity + ' item(s) to cart');

		navigation.goBack();
	};

	// check if there's a dish before rendering
	if (!dish) {
		return <ActivityIndicator size={'large'} color='gray' />;
	}

	return (
		<View style={styles.container}>
			<View style={styles.contentWrap}>
				<Image style={styles.imageStyle} source={{ uri: dish.image }} />
				<View style={styles.dishInfo}>
					<Text style={styles.title}>{dish.name}</Text>

					<View style={{ left: 24, width: '85%' }}>
						<Text style={styles.description}>{dish.description}</Text>
						<Text style={styles.priceStyle}>KES &#8226; {dish.price}</Text>
					</View>
				</View>
			</View>
			<View style={styles.seperator} />

			<View style={styles.buttonContainer}>
				<TouchableOpacity>
					<MaterialCommunityIcon
						name={'minus'}
						style={styles.cartFuncButtons}
						onPress={onRemoveItem}
					/>
				</TouchableOpacity>
				<Text style={styles.itemNum}>{quantity}</Text>
				<TouchableOpacity>
					<MaterialCommunityIcon
						name={'plus'}
						style={styles.cartFuncButtons}
						onPress={onAddItem}
					/>
				</TouchableOpacity>
			</View>

			{quantity > 0 ? (
				<Pressable style={styles.addToCartButton} onPress={exitScreen}>
					<Text style={styles.text}>Add {quantity} item(s) to your cart?</Text>
					<Text style={styles.price}>KES {getTotal()}</Text>
				</Pressable>
			) : (
				<></>
			)}
		</View>
	);
}

// StyleSheet

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '95%',
		alignSelf: 'center',
	},
	contentWrap: {
		justifyContent: 'space-between',
		width: '100%',
		alignSelf: 'center',
		marginVertical: 10,
	},
	imageStyle: {
		width: '100%',
		height: 240,
		borderRadius: 15,
	},
	title: {
		fontSize: 35,
		fontWeight: '800',
		top: -30,
		alignSelf: 'center',
		paddingVertical: 8,
		paddingHorizontal: 10,
		width: '90%',
		backgroundColor: '#f3f3f3',
		borderRadius: 13,
		textAlign: 'center',
		elevation: 20,
	},
	description: {
		fontSize: 18,
		fontWeight: 'normal',
		marginVertical: 10,
		color: 'grey',
	},
	priceStyle: {
		color: '#111',
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		marginVertical: 10,
		borderRadius: 5,
	},
	seperator: {
		width: '95%',
		height: 1,
		backgroundColor: '#111',
		marginVertical: 8,
		alignSelf: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		width: '85%',
		marginVertical: 25,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	cartFuncButtons: {
		fontSize: 30,
		backgroundColor: '#111',
		padding: 6,
		borderRadius: 6,
		color: 'white',
	},
	itemNum: {
		fontSize: 24,
		fontWeight: '500',
	},
	addToCartButton: {
		backgroundColor: '#111',
		marginTop: 'auto',
		padding: 15,
		borderRadius: 7,
		marginBottom: 15,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		color: 'white',
		fontSize: 15,
		fontWeight: '400',
	},
	price: {
		color: 'white',
		fontWeight: '400',
	},
});
