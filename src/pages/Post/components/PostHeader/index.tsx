import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FaGithub } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { IPost } from '../..'

import { HeaderContainer, PostInfo } from './styles'

interface PostHeaderProps {
  post: IPost
}

export function PostHeader({ post }: PostHeaderProps) {
  const timeDistanceToNow = formatDistanceToNow(new Date(post!.created_at), {
    addSuffix: true,
    locale: ptBR,
  })
  const commentsFormated = `${post.comments} ${
    post.comments === 1 ? 'comentário' : 'comentários'
  }`

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </NavLink>
        <a href={post.html_url} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h1>{post.title}</h1>
      <PostInfo>
        <div>
          <FaGithub />
          <span>{post.user.login}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{timeDistanceToNow}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{commentsFormated}</span>
        </div>
      </PostInfo>
    </HeaderContainer>
  )
}
