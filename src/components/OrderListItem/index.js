import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function OrderListItem({ order }) {
	return (
		<View
			style={{
				width: '95%',
				alignSelf: 'center',
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					width: '100%',
					marginVertical: 10,
				}}
			>
				<Image
					source={{
						uri: order.Restaurant.image,
					}}
					style={{ width: 100, height: 100, borderRadius: 8 }}
				/>

				<View
					style={{
						marginLeft: 12,
						justifyContent: 'space-evenly',
					}}
				>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
						{order.Restaurant.name}
					</Text>
					<Text style={{ fontWeight: '400' }}>
						Total &#8226; KES {order.total.toFixed(2)}
					</Text>
					<Text style={{ fontWeight: 'bold', fontSize: 11 }}>
						2 days ago &#8226; {order.Status}
					</Text>
				</View>
			</View>
		</View>
	);
}
