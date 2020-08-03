import React, {useState, useEffect, useContext} from 'react'
import {Dimensions, Platform, Animated} from 'react-native'
import styled, {ThemeContext} from 'styled-components'
import {useNavigation} from '@react-navigation/native'
import {ETASimpleText} from '@etaui'
import HeadCategoryItem from './HeadCategoryItem'
import {connect} from 'react-redux'
import {GET_DATA_REQUEST} from '@redux/menu/categories/actions'

const {width} = Dimensions.get('window')

const Root = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-vertical: 4px;
	width: ${width}px;
`
const ItemsList = styled.FlatList`
	width: ${width}px;
`
const Item = styled.View`
	width: 40px;
	height: 60px;
	border-radius: 20px;
	border-width: 0.5px;
	border-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR_LIGHT};
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
	margin: 5px 9px;
	justify-content: center;
	align-items: center;
`
const Touchable = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	hitSlop: {top: 25, bottom: 25, right: 25, left: 25}
})`
	justify-content: center;
	align-items: center;
`

const mapStateToProps = (state) => {
	const {data} = state.categories
	return {data}
}

const mapDispatchProps = (dispatch) => ({
	getDataRequest: () => {
		dispatch({
			type: GET_DATA_REQUEST,
			dispatch: {},
		})
	},
})

const Categories = ({getDataRequest, data}) => {
	const themeContext = useContext(ThemeContext)
	const navigation = useNavigation()
	const [categoryitems, setcategoryitems] = useState([])
	const [animatedValueTransform] = useState(new Animated.Value(0))
	let delayValue = 1000

	useEffect(() => {
		getDataRequest()
		setcategoryitems(data)
		Animated.spring(animatedValueTransform, {
			toValue: 1,
			tension: 5,
			useNativeDriver: true,
		}).start()
	}, [data])

	const _onPressCategory = (item) => {
		navigation.navigate('CategoryItemsScreen', {
			screen: 'MenuScreen',
			params: {
				name: item.name,
			},
		})
	}

	const _onPressCategoryList = () => {
		navigation.navigate('CategoryListScreen', {
			screen: 'MenuScreen',
			params: {
				name: 'All categories',
			},
		})
	}

	return (
		<Root>
			{categoryitems && categoryitems.length > 0 ? (
				<>
					<ItemsList
						data={categoryitems}
						keyExtractor={(item) => item._id.toString()}
						horizontal
						snapToAlignment='center'
						scrollEventThrottle={16}								
						snapToInterval={50}
						decelerationRate='fast'
						showsHorizontalScrollIndicator={false}
						renderItem={({item}) => {
							delayValue += 1000
							const translateX = animatedValueTransform.interpolate(
								{
									inputRange: [0, 1],
									outputRange: [
										delayValue,
										1,
									],
								},
							)
							return (
								<Touchable
									key={item._id}
									onPress={() =>
										_onPressCategory(item)
									}>
									<Animated.View
										style={{
											transform: [
												{
													translateX,
												},
											],
										}}>
										<HeadCategoryItem
											itemcat={item}
										/>
									</Animated.View>
								</Touchable>
							)
						}}
						ListFooterComponent={() => (
							<Touchable
								onPress={() =>
									_onPressCategoryList()
								}>
								<Item>
									<ETASimpleText
										size={20}
										weight={
											Platform.OS ===
											'ios'
												? '600'
												: '300'
										}
										color={
											themeContext.PRIMARY_TEXT_COLOR_LIGHT
										}
										align='center'>
										+
									</ETASimpleText>
								</Item>
								<ETASimpleText
									size={9}
									weight={
										Platform.OS ===
										'ios'
											? '400'
											: '200'
									}
									// color='white'
									color={
										themeContext.PRIMARY_TEXT_COLOR_LIGHT
									}
									align='center'>
									All categories
								</ETASimpleText>
							</Touchable>
						)}
					/>
				</>
			) : null}
		</Root>
	)
}

const CategoriesConnect = connect(
mapStateToProps,
mapDispatchProps)(Categories)

export default CategoriesConnect
