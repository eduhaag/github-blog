import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  flex: 1;
  padding: 2rem;
  padding-left: 2.5rem;
  gap: 2rem;

  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;

  header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-weight: bold;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
  }
`

export const Bio = styled.div`
  display: flex;
  flex: 1;

  p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export const Details = styled.div`
  gap: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.125rem;
    }
  }

  span {
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
