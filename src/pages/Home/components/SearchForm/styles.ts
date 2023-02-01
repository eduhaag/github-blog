import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    text-align: right;
    color: ${({ theme }) => theme['base-span']};
  }

  form {
    width: 100%;
    padding: 0.75rem 0;
    display: flex;
    gap: 1rem;
  }

  input {
    display: flex;
    padding: 0.75rem 1rem;
    width: 100%;
    box-sizing: border-box;
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};

    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border-color: ${({ theme }) => theme.blue};
    }
  }
`
