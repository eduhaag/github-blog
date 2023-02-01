import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { PostsContext } from '../../../../context/PostsContext'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { posts, fetchPosts } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleQuerySubmit(data: SearchFormInputs) {
    fetchPosts(data.query)
  }

  return (
    <SearchFormContainer>
      <div>
        <h3>Publicações</h3>
        <span>
          {' '}
          {posts.length} {posts.length === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>
      <form onSubmit={handleSubmit(handleQuerySubmit)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </form>
    </SearchFormContainer>
  )
}
