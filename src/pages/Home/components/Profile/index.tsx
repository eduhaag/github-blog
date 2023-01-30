import { useTheme } from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import profileImage from '../../../../assets/profile.jpeg'
import {
  Avatar,
  Bio,
  Details,
  InfoContainer,
  ProfileContainer,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface User {
  login: string
  name: string;
  avatar_url: string;
  bio: string;
  company: string | null
  followers: number
  html_url: string
}


export function Profile() {
  const theme = useTheme()
  const [user, setUser] = useState<User>()

  const followers = user?.followers.toLocaleString('pt-BR')
  const formatedFollowers = `${followers} ${user?.followers===1 ? 'seguidor' : 'seguidores'}`

  async function fetchUserProfile() {
    const response = await api.get('/users/eduhaag')
    
    setUser(response.data)
  }

  useEffect(()=>{
    fetchUserProfile()
  },[])

  return (
    <ProfileContainer>
      <Avatar src={user?.avatar_url} alt="" />
      <InfoContainer>
        <header>
          <h2>{user?.name}</h2>
          <a href={user?.html_url} target="_blank">
            {' '}
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <Bio>
          <p>
            {user?.bio}
          </p>
        </Bio>
        <Details>
          <div>
            <FaGithub color={theme['base-label']} />
            <span>{user?.login}</span>
          </div>
          {
            user?.company && 
            <div>
            <FontAwesomeIcon
              icon={faBuilding}
              color={theme['base-label']}
            />
            <span>{user?.company}</span>
          </div>
          }
          <div>
            <FontAwesomeIcon
              icon={faUserGroup}
              color={theme['base-label']}
            />
            {
              <span>{formatedFollowers}</span>
            }
          </div>
        </Details>
      </InfoContainer>
    </ProfileContainer>
  )
}
