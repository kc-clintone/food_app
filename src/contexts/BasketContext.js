import { createContext, useState, useEffect, useContext } from 'react';
import { DataStore } from 'aws-amplify';
import { Basket, BasketDish } from '../models';
import { useAuthContext } from './AuthContext';

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
	const { dbUser } = useAuthContext();

	const [restaurant, setRestaurant] = useState(null);
	const [basket, setBasket] = useState(null);
	const [basketDishes, setBasketDishes] = useState([]);

	const totalCost = basketDishes.reduce(
		(sum, basketDish) => sum + basketDish.quantity * basketDish.Dish.price,
		restaurant?.deliveryFee
	);

	useEffect(() => {
		DataStore.query(Basket, (b) =>
			b.restaurantID('eq', restaurant.id).userID('eq', dbUser.id)
		).then((baskets) => setBasket(baskets[0]));
	}, [dbUser, restaurant]);

	useEffect(() => {
		DataStore.query(BasketDish, (bd) => bd.basketID('eq', basket.id)).then(
			setBasketDishes
		);
	}, [basket]);

	const addDishToBasket = async (dish, quantity) => {
		// check if there's a cart before creating one
		let Cart = basket || (await createNewBasket());

		// add the dishes to the created cart
		const newDish = await DataStore.save(
			new BasketDish({ quantity, Dish: dish, basketID: Cart.id })
		);

		setBasketDishes([...basketDishes, newDish]);
	};

	// creating user basket for each restaurant
	const createNewBasket = async () => {
		const newBasket = await DataStore.save(
			new Basket({ userID: dbUser.id, restaurantID: restaurant?.id })
		);
		setBasket(newBasket);
		return newBasket;
	};

	return (
		<BasketContext.Provider
			value={{
				addDishToBasket,
				setRestaurant,
				restaurant,
				basket,
				basketDishes,
				totalCost,
			}}
		>
			{children}
		</BasketContext.Provider>
	);
};

export default BasketContextProvider;
export const useBasketContext = () => useContext(BasketContext);
