import styled from 'styled-components'

export const PostContainer = styled.article`
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: bold;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    white-space: nowrap;
  }

  p {
    margin-top: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme['base-text']};
  }
`
