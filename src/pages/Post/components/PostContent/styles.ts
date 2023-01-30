import styled, { css } from 'styled-components'

const textMedium = css`
  font-size: 1rem;
`

export const ArticleContentContainer = styled.div`
  overflow: hidden;
  padding: 2.5rem 2rem;

  h1, h2, h3, h4, h5, h6{
    margin-top: 2rem;
    margin-bottom: 1rem;

    &:first-child{
      margin-top:0
    }
  }

  hr, p {
    margin-bottom: 1rem;
  }

  p {
    ${textMedium}
  }

  strong {
    ${textMedium}
    font-weight: 700;
  }

  a {
    ${textMedium}
    color: ${({ theme }) => theme.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  ul {
    margin-left: 2rem;
  }

`
