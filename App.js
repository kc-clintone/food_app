import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import BasketContextProvider from './src/contexts/BasketContext';
import OrderContextProvider from './src/contexts/OrderContext';

Amplify.configure({ ...config, Analytics: { disabled: true } });

const App = () => {
	return (
		<NavigationContainer>
			<View style={styles.mainView}>
				<AuthContextProvider>
					<BasketContextProvider>
						<OrderContextProvider>
							<RootNavigator />
						</OrderContextProvider>
					</BasketContextProvider>
				</AuthContextProvider>
			</View>
		</NavigationContainer>
	);
};

export default App;

// styles

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: '#f3f3f3',
	},
});
