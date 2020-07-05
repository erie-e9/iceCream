import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import {ETASimpleText} from '@etaui';

const logoSize = 110;
const avatarRadius = logoSize / 2;

const Root = styled.View`
    flex: 0.2;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    marginTop: 15px;
    backgroundColor: transparent;
`;
const ContentContainer = styled.View`
    minHeight: 20px;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    backgroundColor: transparent;
    padding: 10px 20px;
`;
const LogoContainer = styled.View`
    flexDirection: row;
    display: flex;
    justifyContent: center;
    alignItems: center;
    height: 80px;
    width: 80px;
    borderRadius: ${avatarRadius}px;
    backgroundColor: ${props => props.theme.FOURTH_BACKGROUND_COLOR_LIGHT};
    borderWidth: 0.3px;
    borderColor: ${props => props.theme.FOURTH_BACKGROUND_COLOR_LIGHT};
`;
const Logo = styled.Image`
    height: ${Platform.OS === 'ios' ? logoSize : 70}px;
    width: ${Platform.OS === 'ios' ? logoSize : 70}px;
    borderRadius: 45px;
`;

const HeadPaymentMethodComponent = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <Root>
            <LogoContainer>
                <Logo source={{ uri: 'https://img.pngio.com/atm-card-png-transparent-atm-cardpng-images-pluspng-debit-card-png-250_250.png' }} />
            </LogoContainer>
            <ContentContainer>
                <ETASimpleText
                    size={10}
                    weight={Platform.OS === 'ios' ? '300' : '200'}
                    color={themeContext.SECONDARY_TEXT_BACKGROUND_COLOR}
                    align={'left'}>
                    Here you can find your payment methods to products 
                </ETASimpleText>
            </ContentContainer>
        </Root>
    );
}

export default React.memo(HeadPaymentMethodComponent);
