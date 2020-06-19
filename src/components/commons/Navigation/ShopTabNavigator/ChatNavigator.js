import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {Feather, FontAwesome} from '@icons';
import ChatScreen from '@screens/Chat/ChatScreen';
import ChatItemScreen from '@screens/Chat/ChatItemScreen';
import {ETASimpleText} from '@etaui';

const HeaderLeft = styled.TouchableOpacity`
    marginLeft: 15px;
`;
const HeaderLeftCard = styled.TouchableOpacity`
    marginLeft: 15px;
    marginTop: 25px;
    alignItems: center;
    height: 30px;
    width: 30px;
    borderRadius: 15px;
`;
const HeaderRight = styled.View`
    flexDirection: row;
    marginRight: 15px;
`;
const Touchable = styled.TouchableOpacity`
    marginLeft: 10px;
`;
const Header = styled.View`
    marginLeft: 15px;
`;
const IconButton = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #e4e6eb;
    width: 35px;
    height: 35px;
    borderRadius: 35px;
    marginHorizontal: 5px;
    marginRight: 15px;
`;

const ChatItemStack = createStackNavigator();
const ChatItemNavigator = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <ChatStack.Navigator
        screenOptions={{
            headerTransparent: !true,
            headerShown: !true,
            headerTintColor: themeContext.PRIMARY_TEXT_COLOR_LIGHT,
            headerStyle: {
                backgroundColor: themeContext.PRIMARY_TEXT_BACKGROUND_COLOR,
                shadowColor: 'black',
                shadowOpacity: 0,
                shadowOffset: { height: 0 },
                shadowRadius: 5,
                elevation: 5
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}>
        <ChatItemStack.Screen
            name='ChatItemScreen'
            component={ChatItemScreen}
            options={({navigation, route}) => ({
                headerTitle: '',
                headerShown: true,
                headerTransparent: !true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500',
                    color: themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                },
                headerLeft: () => {
                    return (
                        <HeaderLeft onPress={() => navigation.goBack()}>
                            <FontAwesome name='angle-left' size={25} color={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}/>
                        </HeaderLeft>
                    );
                },
                headerRight: () => {
                    return (
                        <Touchable>
                            <HeaderRight>
                                <Feather name='more-vertical' size={20} color={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}/>
                            </HeaderRight>
                        </Touchable>
                    );
                },
                headerTintColor: themeContext.PRIMARY_TEXT_COLOR_LIGHT,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            })}
        />
    </ChatStack.Navigator>
  );
}

const ChatStack = createStackNavigator();
const ChatNavigator = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <ChatStack.Navigator
        screenOptions={{
            headerTransparent: !true,
            headerShown: !true,
            headerTintColor: themeContext.PRIMARY_TEXT_COLOR_LIGHT,
            headerStyle: {
                backgroundColor: themeContext.PRIMARY_TEXT_BACKGROUND_COLOR,
                shadowColor: 'black',
                shadowOpacity: 0.15,
                shadowOffset: { height: 0.2 },
                shadowRadius: 5,
                elevation: 5
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}>

        <ChatStack.Screen
            name='ChatScreen'
            component={ChatScreen}
            options={({navigation, route}) => ({
                headerTitle: '',
                headerShown: true,
                headerTransparent: !true,
                headerLeft: () => {
                    return (
                        <Header>
                            <ETASimpleText
                                size={22}
                                weight={Platform.OS === 'ios' ? 'bold' : 'bold'}
                                color={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}
                                align={'left'}>
                                Chat room
                            </ETASimpleText>
                        </Header>
                    );
                },
                headerRight: () => {
                    return (
                        <IconButton
                            activeOpacity={1}
                            underlayColor='#ccd0d5'
                            // onPress={(event) => _onFocus(event)}
                        >
                            <FontAwesome name='search' size={18} color='#000' />
                        </IconButton>
                    )
                },
                headerTintColor: themeContext.PRIMARY_TEXT_COLOR_LIGHT,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            })}
        />
    </ChatStack.Navigator>
  );
};

export {
    ChatNavigator,
    ChatItemNavigator
};