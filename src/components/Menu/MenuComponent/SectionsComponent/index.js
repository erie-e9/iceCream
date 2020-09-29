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
	border-width: ${Platform.OS === 'ios' ? 0.5 : 0.75}px;
	border-color: ${(props) => props.theme.GRAYFACEBOOK};
`
const BannerLeft = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
`
flex: 1;
const		 BannerRight = styled.View`
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.theme.SECONDARY_TEXT_BACKGROUND_COLOR};
`
const Touchable = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	// hitSlop: {top: 25, bottom: 25, right: 25, left: 25}
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
				<Touchable 
					style={{ backgroundColor: themeContext.PRIMARY_TEXT_BACKGROUND_COLOR }}
					onPress={() => _onPress('Offers of the week')}>
					<BannerLeft>
						<ETASimpleText
							size={10}
							weight={
								Platform.OS === 'ios' ? '600' : 'bold'
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
					</BannerLeft>
				</Touchable>

				<Touchable 
					onPress={() => _onPress('Products with alcohol')}
					style={{ backgroundColor: themeContext.SECONDARY_TEXT_BACKGROUND_COLOR }}>
					<BannerRight>
						<ETASimpleText
							size={10}
							weight={
								Platform.OS === 'ios' ? '600' : 'bold'
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
					</BannerRight>
				</Touchable>

				<Touchable 
					style={{ backgroundColor: themeContext.PRIMARY_TEXT_BACKGROUND_COLOR }}
					onPress={() => _onPress('Free gluten products')}>
					<BannerLeft>
						<ETASimpleText
							size={10}
							weight={
								Platform.OS === 'ios' ? '600' : 'bold'
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
					</BannerLeft>
				</Touchable>
			</Item>
		</Root>
	)
}

export default React.memo(SectionsComponent)
