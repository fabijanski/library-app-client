import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { SimpleGrid } from '@chakra-ui/react'
import { User } from '../components/User'

const ALL_USERS_QUERY = gql`
  query GetAllUsers {
    users {
      name
      avatar {
        color
        image {
          url
        }
      }
    }
  }
`

export default function UsersPage() {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY)
  console.log('UsersPage -> data', data)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Could not load users...</p>
  }

  const { users } = data
  return (
    <SimpleGrid columns={['1', '2', '4']}>
      {users.map(user => (
        <User key={user.name} user={user} />
      ))}
    </SimpleGrid>
  )
}
