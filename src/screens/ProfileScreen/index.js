import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../../models';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
	const { dbUser } = useAuthContext();

	const [name, setName] = useState(dbUser?.name || '');
	const [address, setAddress] = useState(dbUser?.address || '');
	const [lat, setLat] = useState(dbUser?.lat + '' || '0');
	const [lng, setLng] = useState(dbUser?.lng + '' || '0');

	const { sub, setDbUser } = useAuthContext();
	const navigation = useNavigation();

	const onSave = async () => {
		if (dbUser) {
			await updateUser();
		} else {
			await createUser();
		}
		navigation.navigate('E_bites Delicacies');
	};
	// updating an existing user
	const updateUser = async () => {
		const user = await DataStore.save(
			User.copyOf(dbUser, (updated) => {
				updated.name = name;
				updated.address = address;
				updated.lat = parseFloat(lat);
				updated.lng = parseFloat(lng);
			})
		);
		setDbUser(user);
	};

	// creating a new user
	const createUser = async () => {
		try {
			const user = await DataStore.save(
				new User({ name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub })
			);
			setDbUser(user);
		} catch (e) {
			Alert.alert('Error', e.message);
		}
	};

	return (
		<SafeAreaView>
			<Text style={styles.title}>Profile</Text>
			<TextInput
				value={name}
				onChangeText={setName}
				placeholder='Name'
				style={styles.input}
			/>
			<TextInput
				value={address}
				onChangeText={setAddress}
				placeholder='Address'
				style={styles.input}
			/>
			<TextInput
				value={lat}
				onChangeText={setLat}
				placeholder='Latitude'
				style={styles.input}
				keyboardType='numeric'
			/>
			<TextInput
				value={lng}
				onChangeText={setLng}
				placeholder='Longitude'
				style={styles.input}
			/>
			<Button
				onPress={onSave}
				title='Save'
				style={{ width: '70%', alignSelf: 'center' }}
			/>
			<Text
				onPress={() => Auth.signOut()}
				style={{
					color: 'white',
					margin: 10,
					fontSize: 24,
					textAlign: 'center',
					backgroundColor: 'red',
					paddingVertical: 13,
					width: '70%',
					borderRadius: 10,
					alignSelf: 'center',
				}}
			>
				Sign Out
			</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 10,
	},
	input: {
		margin: 10,
		backgroundColor: 'white',
		padding: 15,
		borderRadius: 5,
	},
});

export default Profile;
