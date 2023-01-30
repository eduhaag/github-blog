import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;

  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  nav {
    display: flex;
    flex: 1;
    justify-content: space-between;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      color: ${({ theme }) => theme.blue};

      font-weight: bold;
      font-size: 0.75rem;
    }
  }

  h1 {
    margin-top: 1.25rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
  }
`
export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['base-span']};

    svg {
      color: ${({ theme }) => theme['base-label']};
      font-size: 1.125rem;
    }
  }
`
