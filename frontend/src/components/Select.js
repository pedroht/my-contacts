import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background: #FFF;
  border: 2px solid #FFF;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
