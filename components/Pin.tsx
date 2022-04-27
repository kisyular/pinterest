import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Pin = (props) => {
	const [ratio, setRatio] = useState(1)
	const navigation = useNavigation()
	const { id, image, title } = props.pin

	useEffect(() => {
		if (image) {
			Image.getSize(image, (width, height) => setRatio(width / height))
		}
	}, [image])

	const onLike = () => {
		console.warn('Liked')
	}

	const goToPinPage = () => {
		navigation.navigate('Pin', { id })
	}
	return (
		<Pressable onPress={goToPinPage} style={styles.pin}>
			<View>
				<Image
					style={[styles.image, { aspectRatio: ratio }]}
					source={{
						uri: image,
					}}
				/>
				<Pressable onPress={onLike} style={styles.heartBtn}>
					<AntDesign name='hearto' size={16} color='white' />
				</Pressable>
			</View>
			<Text style={styles.title} numberOfLines={3}>
				{title}
			</Text>
		</Pressable>
	)
}

export default Pin

const styles = StyleSheet.create({
	pin: {
		width: '100%',
		padding: 4,
		marginVertical: 10,
	},
	title: {
		fontSize: 16,
		lineHeight: 22,
		fontWeight: '600',
		margin: 5,
		color: 'white',
	},
	image: {
		width: '100%',
		borderRadius: 15,
		// aspectRatio: 5 / 3,
	},
	heartBtn: {
		backgroundColor: '#D3CFD4',
		position: 'absolute',
		bottom: 10,
		right: 10,
		padding: 5,
		borderRadius: 50,
	},
})
