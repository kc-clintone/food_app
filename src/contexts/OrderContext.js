import { createContext, useContext, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Orders, OrderItem, Basket } from '../models/index';
import { useAuthContext } from './AuthContext';
import { useBasketContext } from './BasketContext';

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
	const { dbUser } = useAuthContext();
	const { restaurant, totalCost, basketDishes, basket } = useBasketContext();

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		DataStore.query(Orders, (o) => o.userID('eq', dbUser.id)).then(setOrders);
	}, []);

	const createOrder = async () => {
		// save orders to orders ---> backed
		const newOrder = await DataStore.save(
			new Orders({
				userID: dbUser.id,
				Restaurant: restaurant,
				Status: 'NEW',
				total: totalCost,
			})
		);

		// retrieve all items in orders ---> backend
		await Promise.all(
			basketDishes.map((basketDish) =>
				DataStore.save(
					new OrderItem({
						quantity: basketDish.quantity,
						ordersID: newOrder.id,
						Dish: basketDish.Dish,
					})
				)
			)
		);

		// update orders screen
		setOrders([...orders, newOrder]);

		// delete cart items after completing order
		await DataStore.delete(basket);
	};

	// get all orders from orders ---> frontend
	const getOrders = async (id) => {
		const order = await DataStore.query(Orders, id);
		const orderDishes = await DataStore.query(OrderItem, (od) =>
			od.ordersID('eq', id)
		);

		return {
			...order,
			dishes: orderDishes,
		};
	};

	return (
		<OrderContext.Provider value={{ createOrder, orders, getOrders }}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
