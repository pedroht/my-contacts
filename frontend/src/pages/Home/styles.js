import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background: #FFF;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const Header = styled.header`
  margin-top: 32px;
  margin-bottom: 8px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

  strong {
    flex: 1;
    font-size: 24px;
  }

  a {
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  padding: 16px;
  border-radius: 4px;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        padding: 4px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]}
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      margin-left: 8px;
      background: transparent;
      border: none;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;
