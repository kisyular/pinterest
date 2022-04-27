import { StyleSheet, ScrollView, useWindowDimensions } from 'react-native'

import { View } from '../components/Themed'
import Pin from '../components/Pin'
import { useState } from 'react'

interface IMasonryList {
	pins: {
		id: string
		image: string
		title: string
	}[]
}

const MasonryList = ({ pins }: IMasonryList) => {
	const width = useWindowDimensions().width

	const numColumns = Math.ceil(width / 350)

	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.column}>
					{pins
						.filter((_, index) => index % 2 === 0)
						.map((pin) => (
							<Pin pin={pin} key={pin.id} />
						))}
				</View>
				<View style={styles.column}>
					{pins
						.filter((_, index) => index % 2 === 1)
						.map((pin) => (
							<Pin pin={pin} key={pin.id} />
						))}
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: 'row',
	},
	column: {
		flex: 1,
	},
})

export default MasonryList
