import { StyleSheet, Image, ScrollView } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import Pin from '../components/Pin'

export default function HomeScreen({
	navigation,
}: RootTabScreenProps<'HomeScreen'>) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Pin
					pin={{
						title: 'Coding and Programming',
						image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
					}}
				/>
				<Pin
					pin={{
						title: 'Coding and Programming',
						image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg',
					}}
				/>
				<Pin
					pin={{
						title: 'Coding and Programming',
						image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/2.jpeg',
					}}
				/>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 10,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	image: {
		width: '100%',
		borderRadius: 15,
		aspectRatio: 6 / 3,
	},
	pin: {
		width: '100%',
		padding: 4,
	},
})
