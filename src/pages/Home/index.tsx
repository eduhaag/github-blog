import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostList } from './styles'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostList>
        {posts.map((post) => {
          return <Post key={post.number} post={post} />
        })}
      </PostList>
    </HomeContainer>
  )
}
