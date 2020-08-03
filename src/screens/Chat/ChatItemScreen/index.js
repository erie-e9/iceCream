import React, {useLayoutEffect, useContext} from 'react'
import styled, {ThemeContext} from 'styled-components/native'
import {Platform} from 'react-native'
import ChatItemComponent from '@components/Chat/ChatItemComponent'
import {ETASimpleText, ETAAvatar} from '@etaui'
import {truncateString} from '@functions'

const Root = styled.View`
	flex: 1;
`
const HeaderContainer = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-start;
	align-items: stretch;
	background-color: transparent;
`
const NameContainer = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Touchable = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	hitSlop: {top: 25, bottom: 25, right: 25, left: 25}
})``
const AvatarContainer = styled.View`
	height: 37px;
	width: 37px;
	padding: 2px;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	border-color: ${(props) => props.active ? props.theme.ACTIVE : props.theme.GRAYFACEBOOK};
	border-width: 2px;
	margin-right: 10px;
	margin-top: 5px;
	background-color: transparent;
`

const ChatItemScreen = ({navigation, route}) => {
	const {item} = route.params
	const themeContext = useContext(ThemeContext)
	const fullname = `${item.employee.firstname} ${item.employee.lastname}`

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => (
				<HeaderContainer>
					<AvatarContainer active={item.active}>
						<ETAAvatar
							image={item.employee.avatar}
							size='small'
						/>
					</AvatarContainer>
					<NameContainer>
						<ETASimpleText
							size={13}
							weight={
								Platform.OS === 'ios'
									? '400'
									: '400'
							}
							color={
								themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
							}
							align='left'>
							{truncateString(fullname, 40)}
						</ETASimpleText>
						<Touchable>
							<ETASimpleText
								size={11}
								weight={
									Platform.OS === 'ios'
										? '500'
										: '300'
								}
								color={themeContext.LINK}
								align='left'>
								@
								{truncateString(
									item.employee.username,
									30,
								)}
							</ETASimpleText>
						</Touchable>
					</NameContainer>
				</HeaderContainer>
			),
		})
	}, [navigation, route])

	return (
		<Root>
			<ChatItemComponent />
		</Root>
	)
}

export default ChatItemScreen
