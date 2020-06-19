import React, {useContext} from 'react';
import {Platform} from 'react-native';
import styled, {ThemeContext} from 'styled-components/native';
import {ETASimpleText} from '@etaui';
import { truncateString } from '@functions';

const Root = styled.View`
  flex: 1;
  flexDirection: column;
  justifyContent: flex-start;
  alignItems: flex-start;
  alignContent: center;
  paddingHorizontal: 10px;
  paddingRight: 20px;
  borderBottomWidth: 0.5px;
  borderBottomColor: ${props => props.theme.GRAYFACEBOOK}; 
`;
const ChatContentContainer = styled.View`
  flex: 1;
  flexDirection: column;
  alignItems: flex-start;
  justifyContent: flex-start;
  paddingHorizontal: 10px;
`;

const CardBody = ({text}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Root>
      <ChatContentContainer>
        <ETASimpleText
          size={14}
          weight={Platform.OS === 'ios' ? '500' : '300'}
          color={themeContext.PRIMARY_TEXT_COLOR_LIGHT}
          align={'left'}>
          {
            truncateString(text, 35)
          }
        </ETASimpleText>
      </ChatContentContainer>
    </Root>
  );
};

export default CardBody;
