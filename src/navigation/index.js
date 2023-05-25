import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useAuthContext } from '../contexts/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

// ----screens----
import DetailScreen from '../screens/RestaurantDetailScreen/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import DishDetailScreen from '../screens/DishDetailScreen';
import Cart from '../screens/Cart';
import OrderScreen from '../screens/Orders';
import Profile from './../screens/ProfileScreen/index';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	const { dbUser } = useAuthContext();

	return (
		<Stack.Navigator initialRouteName='Home'>
			{dbUser ? (
				<>
					<Stack.Screen name='E_bites Delicacies' component={HomeTabs} />
					<Stack.Screen name='Dish details' component={DishDetailScreen} />
					<Stack.Screen name='Your Cart' component={Cart} />
					<Stack.Screen
						name='RestaurantDetailsScreen'
						component={DetailScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name={'OrderScreen'} component={OrderScreen} />
					<Stack.Screen name={'ProfileScreen'} component={Profile} />
				</>
			) : (
				<>
					<Stack.Screen
						name='SignIn'
						component={SignInScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name='SignUp' component={SignUpScreen} />
					<Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
					<Stack.Screen
						name='ForgotPassword'
						component={ForgotPasswordScreen}
					/>
					<Stack.Screen name='NewPassword' component={NewPasswordScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};

const Tabs = createMaterialBottomTabNavigator();

const HomeTabs = () => {
	return (
		<Tabs.Navigator
			barStyle={{ backgroundColor: 'white' }}
			screenOptions={{ headerShown: false }}
		>
			<Tabs.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name={'ios-home'} color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name='Orders'
				screenOptions={{ headerShown: false }}
				component={OrderScreen}
				screenOp
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name={'ios-list'} color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name='Cart'
				component={Cart}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name={'ios-cart'} color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name={'ios-person'} color={color} size={24} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default RootNavigator;
