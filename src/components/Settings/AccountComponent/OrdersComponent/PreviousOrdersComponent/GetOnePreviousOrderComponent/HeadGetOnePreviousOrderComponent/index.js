import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { Platform } from 'react-native'
import { ETASimpleText } from '@etaui'
import { truncateString, currencySeparator, creditnumberSeparator, phoneSeparator } from '@functions'
import { Ionicons } from '@icons'
import { useTranslation } from '@etaui/translate'

const logoSize = 90
const avatarRadius = logoSize / 2

const Root = styled.View`
    min-height: 20px;
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
`
const TopContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
	padding-vertical: 10px;
`
const StatusContainer = styled.View`
	flex-direction: row;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
    margin-vertical: 5px;
	border-radius: ${avatarRadius}px;
	border-width: 0.3px;
	border-color: ${(props) => props.theme.FOURTH_BACKGROUND_COLOR_LIGHT};
    background-color: transparent;
`
const ContentContainer = styled.View`
	min-height: 20px;
    min-width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    margin-vertical: 2px;
	background-color: transparent;
`
const OrderIDContainer = styled.View`
	justify-content: center;
	align-items: center;
	z-index: 100;
	border-width: 0px;
	padding-vertical: 2px;
	margin-bottom: 3px;
	border-color: white;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	background-color: ${(props) => props.theme.FOURTH_BACKGROUND_COLOR_LIGHT};
`
const DetailsContainer = styled.View`
    width: 100%;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    margin-vertical: 2px;
	padding-vertical: 5px;
	border-top-width: 0.5px;
	border-top-color: ${(props) => props.theme.GRAYFACEBOOK};
	background-color: ${(props) => props.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
`
const DetailContainer = styled.View`
    min-height: 20px;
    width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-horizontal: 20px;
    margin-vertical: 2px;
	background-color: transparent;
`

const HeadGetOneProcessingOrderComponent = (item) => {
	const themeContext = useContext(ThemeContext)
	const { delivered_order, canceled_order, total, order_date, delivery_date , contact_phone , delivery_address, payment_method } = useTranslation()

	return (
		<Root>
			<TopContainer>
                <StatusContainer>
                    <Ionicons
                        name={item.status === 1 ? 'md-checkmark-circle-outline' : 'md-close-circle-outline'}
                        size={40}
                        color={item.status === 1 ? themeContext.SUCCESS_COLOR : themeContext.FAIL_COLOR}
                    />
                    
                </StatusContainer>
                <ContentContainer>
                    <OrderIDContainer>
                        <ETASimpleText
                            size={13}
                            weight={
                                Platform.OS ===
                                'ios'
                                ? '400'
                                : '500'
                            }
                            color={
                                themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                            }
                            align='left'
                            style={{
                                marginHorizontal: 5
                            }}>
                            {item._id}
                        </ETASimpleText>
                    </OrderIDContainer>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : 'bold'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {
                            item.status === 1
                            ? `${delivered_order.charAt(0).toUpperCase() + delivered_order.slice(1)}`
                            : `${canceled_order.charAt(0).toUpperCase() + canceled_order.slice(1)}`
                        }
                    </ETASimpleText>
                </ContentContainer>
            </TopContainer>
            <DetailsContainer>
                <DetailContainer>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '400'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {total.charAt(0).toUpperCase() + total.slice(1)} 
                    </ETASimpleText>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '800'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        $
                        {currencySeparator(
                            item.ordertotal.toFixed(2),
                        )}
                    </ETASimpleText>
                </DetailContainer>
                <DetailContainer>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '400'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {order_date.charAt(0).toUpperCase() + order_date.slice(1)} 
                    </ETASimpleText>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '800'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {item.orderdate}
                    </ETASimpleText>
                </DetailContainer>
                {
                    item.status === 1
                    ?   <DetailContainer>
                            <ETASimpleText
                                size={13}
                                weight={
                                    Platform.OS ===
                                    'ios'
                                    ? '400'
                                    : '400'
                                }
                                color={
                                    themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                                }
                                align='left'
                                style={{
                                    marginHorizontal: 5
                                }}>
                                {delivery_date.charAt(0).toUpperCase() + delivery_date.slice(1)} 
                            </ETASimpleText>
                            <ETASimpleText
                                size={13}
                                weight={
                                    Platform.OS ===
                                    'ios'
                                    ? '400'
                                    : '800'
                                }
                                color={
                                    themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                                }
                                align='left'
                                style={{
                                    marginHorizontal: 5
                                }}>
                                {item.delivereddate}
                            </ETASimpleText>
                        </DetailContainer>
                    :   null
                }
                <DetailContainer>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '400'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {contact_phone.charAt(0).toUpperCase() + contact_phone.slice(1)} 
                    </ETASimpleText>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '800'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {phoneSeparator(item.contactphone)}
                    </ETASimpleText>
                </DetailContainer>
                <DetailContainer>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '400'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {delivery_address.charAt(0).toUpperCase() + delivery_address.slice(1)}
                    </ETASimpleText>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '800'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {truncateString(item.deliveryaddress, 20)}
                    </ETASimpleText>
                </DetailContainer>
                <DetailContainer>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '400'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {payment_method.charAt(0).toUpperCase() + payment_method.slice(1)}
                    </ETASimpleText>
                    <ETASimpleText
                        size={13}
                        weight={
                            Platform.OS ===
                            'ios'
                            ? '400'
                            : '800'
                        }
                        color={
                            themeContext.SECONDARY_TEXT_BACKGROUND_COLOR
                        }
                        align='left'
                        style={{
                            marginHorizontal: 5
                        }}>
                        {creditnumberSeparator(item.paymenthmethod.padStart(12, '•'))}
                    </ETASimpleText>
                </DetailContainer>
            </DetailsContainer>
		</Root>
	)
}

export default React.memo(HeadGetOneProcessingOrderComponent)
