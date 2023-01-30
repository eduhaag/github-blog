import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { IPost, PostsContext } from '../../../../context/PostsContext'
import { PostContainer } from './styles'

interface PostProps {
  postId: number
}

export function Post({ postId }: PostProps) {
  const { posts } = useContext(PostsContext)
  const [post, setPost] = useState<IPost>()

  useEffect(() => {
    const findPost = posts.find((item) => item.number === postId)

    setPost(findPost)
  }, [postId, posts])

  const timeDistanceToNow = formatDistanceToNow(new Date(post!.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <NavLink to={`/post/${post?.number}`} style={{ textDecoration: 'none' }}>
      <PostContainer>
        <header>
          <h2>{post?.title}</h2>
          <span>{timeDistanceToNow}</span>
        </header>
        <p>{post?.body}</p>
      </PostContainer>
    </NavLink>
  )
}
