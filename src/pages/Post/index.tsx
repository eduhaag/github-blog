/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostContent } from './components/PostContent'

import { PostHeader } from './components/PostHeader'
import { PostContainer } from './styles'

export interface IPost {
  number: number
  html_url: string
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
}

export function Post() {
  const [post, setPost] = useState<IPost>()
  const { id } = useParams()

  useEffect(() => {
    api.get(`repos/eduhaag/github-blog/issues/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [])

  return (
    <PostContainer>
      <PostHeader post={post!} />
      <PostContent children={post!.body} />
    </PostContainer>
  )
}
