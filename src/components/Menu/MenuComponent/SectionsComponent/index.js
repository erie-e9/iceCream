import React, {useContext} from 'react'
import {Platform, Dimensions} from 'react-native'
import styled, {ThemeContext} from 'styled-components'
import {useNavigation} from '@react-navigation/native'
import {ETASimpleText} from '@etaui'

const {width} = Dimensions.get('window')
const Root = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
	padding: 10px 0px;
	margin-bottom: 10px;
`
const Item = styled.View`
	flex-direction: row;
	width: ${width - 50}px;
	height: 35px;
	border-radius: 1px;
	border-width: 0.75px;
	border-color: ${(props) => props.theme.GRAYFACEBOOK};
`
const BannerLeft = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
`
const BannerRight = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.theme.SECONDARY_TEXT_BACKGROUND_COLOR};
`
const Touchable = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	hitSlot: {top: 50, bottom: 50, right: 50, left: 50}
})`
	flex: 1;
	justify-content: center;
	align-items: center;
`

const SectionsComponent = () => {
	const themeContext = useContext(ThemeContext)
	const navigation = useNavigation()

	const _onPress = (name) => {
		navigation.navigate('SectionScreen', {
			screen: 'MenuScreen',
			params: {
				name: name,
			},
		})
	}

	return (
		<Root>
			<Item>
				<BannerLeft>
					<Touchable onPress={() => _onPress('Offers of the week')}>
						<ETASimpleText
							size={10}
							weight={
								Platform.OS === 'ios' ? '700' : 'bold'
							}
							color={
								themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
							}
							align='center'>
							Offers
						</ETASimpleText>
						<ETASimpleText
							size={9}
							weight={
								Platform.OS === 'ios' ? '400' : '400'
							}
							color={
								themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
							}
							align='center'
							time={2000}>
							of the week
						</ETASimpleText>
					</Touchable>
				</BannerLeft>

				<BannerRight>
					<Touchable onPress={() => _onPress('Products with alcohol')}>
						<ETASimpleText
							size={10}
							weight={
								Platform.OS === 'ios' ? '700' : 'bold'
							}
							color={
								themeContext.PRIMARY_TEXT_BACKGROUND_COLOR
							}
							align='center'>
							Products with
						</ETASimpleText>
						<ETASimpleText
							size={9}
							weight={
								Platform.OS === 'ios' ? '400' : '400'
							}
							color={
								themeContext.PRIMARY_TEXT_BACKGROUND_COLOR
							}
							align='center'>
							alcohol
						</ETASimpleText>
					</Touchable>
				</BannerRight>

				<BannerLeft>
					<Touchable onPress={() => _onPress('Free gluten products')}>
						<ETASimpleText
							size={10}
							weight={
								Platform.OS === 'ios' ? '700' : 'bold'
							}
							color={
								themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
							}
							align='center'>
							Free gluten
						</ETASimpleText>
						<ETASimpleText
							size={9}
							weight={
								Platform.OS === 'ios' ? '400' : '400'
							}
							color={
								themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
							}
							align='center'>
							products
						</ETASimpleText>
					</Touchable>
				</BannerLeft>
			</Item>
		</Root>
	)
}

export default React.memo(SectionsComponent)
