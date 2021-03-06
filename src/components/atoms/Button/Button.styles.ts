import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.red};
  color: #fff;
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-size: 12px;
  letter-spacing: 3px;
  border: none;
  border-top-right-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
`;

export { StyledButton };
