import React, {useLayoutEffect} from 'react'
import styled from 'styled-components/native'
import GetOnePreviousOrderComponent from '@components/Settings/AccountComponent/OrdersComponent/PreviousOrdersComponent/GetOnePreviousOrderComponent'

const Root = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`

const GetOnePreviousOrderScreen = ({navigation, route}) => {
	const {item} = route.params
	useLayoutEffect(() => {
		navigation.setOptions({headerTitle: `Order ${item._id}`})
	}, [navigation, route])

	return (
		<Root>
			<GetOnePreviousOrderComponent />
		</Root>
	)
}

export default GetOnePreviousOrderScreen
