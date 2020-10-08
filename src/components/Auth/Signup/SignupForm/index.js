import React, { useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ETATextInputOutline, ETASimpleText, ETAErrorMessage, ETAMultiStep, ETARadio } from '@etaui'
import { connect } from 'react-redux'
import { SIGNUP } from '@redux/user/actions'

const KeyboardMisser = styled.TouchableWithoutFeedback`
	flex: 1;
	width: 100%;
`
const Root = styled.TouchableWithoutFeedback`
	flex: 1;
`
const StepContainer = styled.View`
	flex: 1;
	flex-direction: column;
	background-color: transparent;
`
const ContentContainer = styled.View`
	flex: 1;
    align-items: center;
    background-color: transparent;
`
const HeadContainer = styled.View`
	flex: 0.25;
    justify-content: flex-end;
    align-items: flex-start;
	width: 100%;
	padding-horizontal: 20px;
	padding-vertical: 20px;
    background-color: transparent;
`
const FormContainer = styled.View`
	flex: 0.75;
	flex-direction: column;
	display: flex;
	justify-content: center;
	width: 100%;
    background-color: transparent;
`
const RadioContainer = styled.View`
	flex: 0.3;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-horizontal: 50px;
    background-color: transparent;
`
const RadioContainerItems = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	padding-horizontal: 10px;
	margin-top: 15px;
	background-color: transparent;
`

const mapDispatchProps = (dispatch, props) => ({
	getAllUserInfoUser: ({cellphone, password}) => {
		dispatch({
			type: SIGNUP,
			payload: {
				cellphone: cellphone,
				password: password,
			},
		})
	},
})

const SignupForm = ({getAllUserInfoUser}) => {
    const themeContext = useContext(ThemeContext)
	const navigation = useNavigation()
	const [ mysecureTextEntry ] = useState(true)
	const [ radioItem, setradioItem ] = useState(true)

	const _radioChange = async (item) => {
		await setradioItem(radioItem ? !radioItem : true)
		// await _setswitchItem(item)
		// toogleNotification(id)
	}

	const form = [
		{
			title: 'Welcome to create a new account',
			description: `Please use a real cellphone. We'll send a confirmation code.`,
			items: [
				{
					placeholder: 'First, What is your cellphone?',
					name: 'cellphone',
					controller: {
						type: 'textinput',
						keyboardtype: 'phone-pad',
						secureTextEntry: false,
						maxLength: 10
					}
				},
			]
		},
		{
			title: `Please insert code`,
			description: `We need to confirm that you are who you say you are.`,
			items: [
				{
					placeholder: 'Code',
					name: 'code',
					controller: {
						type: 'textinput',
						keyboardtype: 'phone-pad',
						secureTextEntry: false
					}
				}
			]
		},
		{
			title: 'Personal Data',
			description: 'Your personal data is confidential. We need it for identification use.',
			items: [
				{
					placeholder: 'What is your name?',
					name: 'name',
					controller: {
						type: 'textinput',
						keyboardtype: 'default',
						secureTextEntry: false,
						maxLength: 100
					}
				},
				{
					placeholder: 'Now your lastname',
					name: 'lastname',
					controller: {
						type: 'textinput',
						keyboardtype: 'default',
						secureTextEntry: false,
						maxLength: 100
					}
				},
				{
					placeholder: 'Your genre:',
					name: 'genre',
					controller: {
						type: 'radioinput',
						values: [
							{
								value: 'men'
							},
							{
								value: 'women'
							}
						]
					}
				}
			]
		},
		{
			title: 'Account Data',
			description: 'The data will be usefull for use our app, please fill fields to finish your sign in.',
			items: [
				{
					placeholder: 'Choose a unique username',
					name: 'username',
					controller: {
						type: 'textinput',
						keyboardtype: 'default',
						secureTextEntry: false,
						maxLength: 100
					}
				},
				{
					placeholder: 'Password',
					name: 'password',
					controller: {
						type: 'textinput',
						keyboardtype: 'default',
						secureTextEntry: true,
						maxLength: 100
					}
				},
				{
					placeholder: 'Confirm password',
					name: 'confirmPassword',
					controller: {
						type: 'textinput',
						keyboardtype: 'default',
						secureTextEntry: false,
						maxLength: 100
					}
				}
			]
		},
	]
	
	const _finishFunction = (values) => {
		navigation.goBack()
		console.log('_finishFunction')
	}

	return (
		<Root>
            <ETAMultiStep
				prevText='Previous'
				nextText='Next'
				finishText='Send'
				finishFunction={() => _finishFunction()}
				initialValues={{
					cellphone: '',
					name: '',
					lastname: '',
					genre: 'men',
					username: '',
					password: '',
					confirmPassword: ''
					// email: ''
				}}
			>
             {
				 form.map((element, index) => (
					<ETAMultiStep.Step key={index}>
						{({ onChangeValue, values }) => (
							<StepContainer>
								<KeyboardAvoidingView 
									behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
									// contentContainerStyle=''
									style={{flex: 1}}
								>	
								<KeyboardMisser onPress={() => Keyboard.dismiss()}>
									<ContentContainer>
										<HeadContainer>
											<ETASimpleText
												size={24}
												weight={
													Platform.OS === 'ios'
													? '700'
													: 'bold'
												}
												color={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}
												align='left'
												style={{ marginTop: 10 }}>
												{element.title}
											</ETASimpleText>
											<ETASimpleText
												size={13}
												weight={
													Platform.OS === 'ios'
													? '400'
													: '500'
												}
												color={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}
												align='left'
												style={{ marginTop: 10 }}>
												{element.description}
											</ETASimpleText>
										</HeadContainer>
										<FormContainer>
											{
												element.items.map((item, i) => {
													switch (item.controller.type) {
														case 'textinput':
															return (
																<ETATextInputOutline
																	key={i}
																	value={values?.[item.name]}
																	placeholder={item.placeholder}
																	placeholderTextColor={themeContext.PRIMARY_TEXT_COLOR_LIGHT}
																	keyboardType={item.controller.keyboardtype}
																	autoCapitalize='none'
																	allowFontScaling
																	autoCorrect
																	autoFocus
																	blurOnSubmit={false}
																	caretHidden={false}
																	clearButtonMode='while-editing'
																	contextMenuHidden={false}
																	editable
																	enablesReturnKeyAutomatically={false}
																	underlineColorAndroid='transparent'
																	keyboardAppearance='dark'
																	maxLength={item.controller.maxLength}
																	multiline={false}
																	numberOfLines={1} // android
																	returnKeyLabel='next' // android
																	secureTextEntry={false} // password
																	spellCheck
																	textContentType='none'
																	returnKeyType='next'
																	textsize={14}
																	height={40}
																	width={270}
																	borderWidth={0.3}
																	onChangeText={text => onChangeValue(
																		[item.name], text
																	)}
																	// onBlur={handleBlur('cellphone')}
																	selectionColor={themeContext.PRIMARY_COLOR}
																/>
															)
														case 'radioinput': 
															return (
																<RadioContainer
																	key={i}>
																	<ETASimpleText
																		size={14}
																		weight={
																			Platform.OS === 'ios'
																			? '700'
																			: 'bold'
																		}
																		color={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}
																		align='center'
																		style={{ marginTop: 10 }}>
																		{item.placeholder}
																	</ETASimpleText>
																		<RadioContainerItems>
																		{
																			item.controller.values.map((subitem) => {
																				return (
																					<ETARadio 
																						key={subitem.value}
																						text={subitem.value.charAt(0).toUpperCase() + subitem.value.slice(1)}
																						sizeText={14}
																						colorText={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}
																						onChange={() => onChangeValue([item.name], subitem?.value) }
																						activated={values?.genre === subitem?.value ? true : false }
																						sizeRadio={15}
																						colorRadio={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}
																					/>
																				)
																			})
																		}
																		</RadioContainerItems>
																</RadioContainer>
															)
														default:
															return;
													}
												})
											}
										</FormContainer>
									</ContentContainer>
								</KeyboardMisser>
							</KeyboardAvoidingView>
							</StepContainer>
						)}
					</ETAMultiStep.Step>
				 ))
			 }   
            </ETAMultiStep>
        </Root>
    )
}

const SignupFormConnect = connect(null, mapDispatchProps)(SignupForm)
export default SignupFormConnect