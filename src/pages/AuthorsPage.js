import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Author } from '../components/Author'
import { Flex } from '@chakra-ui/react'

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
  return (
    <Flex wrap="wrap" justify="space-around">
      {authors.map(author => (
        <Author key={author.name} author={author} />
      ))}
    </Flex>
  )
}
