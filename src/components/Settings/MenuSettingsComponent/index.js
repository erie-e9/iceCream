import React, { useContext } from 'react'
import { Platform } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { ETAAvatar, ETASimpleText } from '@etaui'
import { truncateString } from '@functions'
import { fakeavatar } from '@utils/constants'
import PointsHeadComponent from './PointsHeadComponent'
import MenuSettingsContentComponent from './MenuSettingsContentComponent'

const firstname = 'Scarlett'
const lastname = 'Johansson'
const username = 'BWidow'
const info = 'Member from 5 jun 2017'

const Root = styled.View`
	flex: 1;
	flex-direction: column;
	background-color: transparent
`
const ProfileUserContent = styled.View`
	flex-direction: column;
	justify-content: flex-start;
	background-color: transparent
`
const Scroll = styled.ScrollView`
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
`
const Card = styled.View`
	flex-direction: row;
	margin-bottom: 1px;
	min-height: 40px;
	align-items: center;
	padding-horizontal: 10px;
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
`
const MetadataHeader = styled.View`
	flex-direction: column;
	justify-content: center;
	min-height: 80px;
	margin-horizontal: 10px;
`
const MetadataInfo = styled.View`
	flex-direction: column;
	justify-content: center;
	padding-horizontal: 5px;
	margin-right: 50px;
	margin-vertical: 5px;
	padding-right: 40px;
`
const Touchable = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	hitSlop: {top: 0, bottom: 0, right: 0, left: 0}
})``

const SettingsComponent = () => {
	const themeContext = useContext(ThemeContext)
	const navigation = useNavigation()

	return (
		<Root>
			<PointsHeadComponent />
			<ProfileUserContent>
				<Touchable
					onPress={() =>
						navigation.navigate('SettingsNavigator', {
							screen: 'ProfileScreen',
						})
					}>
					<Card>
						<ETAAvatar
							image={fakeavatar}
							size='middle'
						/>
						<MetadataHeader>
							<ETASimpleText
								size={14}
								weight={
									Platform.OS === 'ios'
										? '600'
										: '800'
								}
								color={
									themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
								}
								align='left'>
								{firstname} {lastname}
							</ETASimpleText>
							<MetadataInfo>
								<ETASimpleText
									size={13}
									weight={
										Platform.OS ===
										'ios'
											? '400'
											: '300'
									}
									color={themeContext.LINK}
									align='left'>
									@
									{truncateString(
										username,
										40,
									)}
								</ETASimpleText>
								<ETASimpleText
									size={11}
									weight={
										Platform.OS ===
										'ios'
											? '400'
											: '300'
									}
									color={
										themeContext.PRIMARY_TEXT_COLOR_LIGHT
									}
									align='left'>
									{info}
								</ETASimpleText>
							</MetadataInfo>
						</MetadataHeader>
					</Card>
				</Touchable>
			</ProfileUserContent>
			<Scroll>
				<MenuSettingsContentComponent />
			</Scroll>
		</Root>
	)
}

export default SettingsComponent
