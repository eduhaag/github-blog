import { HeaderContainer } from './styles'

import logoImage from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImage} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}
