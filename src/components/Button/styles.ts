import styled, { css } from 'styled-components/native';

interface IButtonProps {
  isDisabled?: boolean;
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  border-width: 1px;
  border-color: #2d3436;
  border-radius: 8px;
  height: 44px;
  padding: 0 20px;

  justify-content: center;
  align-items: center;

  ${props =>
    props.isDisabled &&
    css`
      opacity: 0.5;
    `};
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  color: #312e38;
  font-size: 16px;
`;
