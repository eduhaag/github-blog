import { HeaderContainer } from './styles'

import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImage} alt="" />
    </HeaderContainer>
  )
}
