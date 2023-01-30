import styled from 'styled-components'

import headerEffect from '../../assets/effect.png'
import headerEffectFliped from '../../assets/effect-fliped.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 18.5rem;

  background: ${({ theme }) => theme['base-profile']};
  background-image: url(${headerEffect}), url(${headerEffectFliped});
  background-repeat: no-repeat;
  background-position: left center, right center;

  img {
    height: 6.125rem;
    margin-top: 4rem;
  }
`
