import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Author } from '../components/Author'

const ALL_AUTHORS_QUERY = gql`
  query GetAllAuthors {
    authors {
      name
      photo {
        url
      }
    }
  }
`

export default function AuthorsPage() {
  const { loading, error, data } = useQuery(ALL_AUTHORS_QUERY)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Could not load authors...</p>
  }

  const { authors } = data
  return authors.map(author => <Author key={author.name} author={author} />)
}
