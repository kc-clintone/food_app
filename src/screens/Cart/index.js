import { View, Text, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { useBasketContext } from '../../contexts/BasketContext';
import { useOrderContext } from '../../contexts/OrderContext';
import { useNavigation } from '@react-navigation/native';

export const CartDishItems = ({ cartItem }) => {
	return (
		<View style={styles.cartStyles}>
			<View style={styles.cartItems}>
				<Text style={styles.cartItemsQuantity}>{cartItem.quantity}</Text>
			</View>
			<Text style={styles.itemStyle}>{cartItem.Dish.name}</Text>
			<Text style={{ marginLeft: 'auto' }}>KES {cartItem.Dish.price}</Text>
		</View>
	);
};

export default function Cart() {
	const { restaurant, basketDishes, totalCost } = useBasketContext();

	const navigation = useNavigation();
	const { createOrder } = useOrderContext();

	const onCreateOrder = async () => {
		await createOrder();
		Alert.alert(
			'Order Placed Successfuly',
			'Your will be notified of delivery details shortly'
		);
		navigation.navigate('OrderScreen');
	};

	const contShopping = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.dishInfo}>
				<Text style={styles.title}>{restaurant?.name}</Text>
			</View>
			<View style={styles.seperator} />

			<Text style={{ marginLeft: 10, fontSize: 15, fontWeight: '400' }}>Your Items</Text>

			<View>
				<FlatList
					data={basketDishes}
					renderItem={({ item }) => <CartDishItems cartItem={item} />}
				/>
			</View>

			<View style={styles.seperator} />

			<View
				style={{
					marginHorizontal: 10,
					alignSelf: 'center',
					width: '90%',
				}}
			>
				<View style={styles.totalCost}>
					<Text style={styles.total}>Total Cost</Text>
					<Text style={styles.totalValue}>KES &#8226; {totalCost.toFixed(2)}</Text>
				</View>
			</View>

			<View style={styles.addToCartButton}>
				<Pressable style={styles.checkOutContainer}>
					<Text onPress={contShopping} style={styles.shopBtn}>
						Grab more food
					</Text>
				</Pressable>
				<Pressable onPress={onCreateOrder} style={styles.checkOutContainer}>
					<Text style={styles.checkOutBtn}>Check Out</Text>
				</Pressable>
			</View>
		</View>
	);
}

// StyleSheet

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		padding: 5,
	},
	title: {
		fontSize: 28,
		fontWeight: '800',
	},
	description: {
		fontSize: 16,
		fontWeight: 'normal',
		marginVertical: 5,
		color: 'grey',
	},
	seperator: {
		width: '95%',
		height: 1,
		backgroundColor: '#111',
		marginVertical: 8,
		alignSelf: 'center',
	},
	dishInfo: {
		marginTop: 65,
		paddingHorizontal: 12,
	},
	cartStyles: {
		flexDirection: 'row',
		width: '90%',
		marginVertical: 8,
		alignItems: 'center',
		alignSelf: 'center',
	},
	itemNum: {
		fontSize: 20,
		fontWeight: '400',
	},
	addToCartButton: {
		marginTop: 'auto',
		padding: 10,
		marginBottom: 15,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	shopBtn: {
		color: 'white',
		fontSize: 18,
		fontWeight: '400',
		paddingVertical: 15,
		textAlign: 'center',
	},
	itemStyle: {
		color: '#111',
		fontSize: 15,
		fontWeight: '700',
	},
	checkOutBtn: {
		fontSize: 18,
		padding: 15,
		color: 'white',
		paddingVertical: 15,
		textAlign: 'center',
		fontWeight: '400',
	},
	cartItemsQuantity: {
		backgroundColor: 'lightgrey',
		paddingVertical: 3,
		paddingHorizontal: 5,
		borderRadius: 5,
		marginRight: 10,
	},
	totalCost: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	total: {
		fontWeight: 'bold',
		fontSize: 15,
	},
	totalValue: {
		fontWeight: 'bold',
	},
	checkOutContainer: {
		backgroundColor: '#111',
		width: '48%',
		borderRadius: 10,
	},
});
