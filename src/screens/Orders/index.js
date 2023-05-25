import { View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import OrderListItem from '../../components/OrderListItem';
import { useOrderContext } from '../../contexts/OrderContext';
import { useRoute } from '@react-navigation/native';

export default function OrderScreen() {
	const { getOrders, orders } = useOrderContext();
	const [order, setOrder] = useState();
	const route = useRoute();
	const id = route.params?.id;

	// useEffect(() => {
	// 	getOrders(id).then(setOrder);
	// }, []);

	if (!orders) {
		return <ActivityIndicator size={'large'} color={'gray'} />;
	}

	return (
		<View>
			<FlatList data={orders} renderItem={({ item }) => <OrderListItem order={item} />} />
		</View>
	);
}
