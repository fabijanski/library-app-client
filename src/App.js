import React from 'react'
import AuthorsPage from './pages/AuthorsPage'
import { Heading, Flex } from '@chakra-ui/react'

export default function App() {
  return (
    <Flex direction="column" align="center" width="75%" mx="auto">
      <Heading as="h1">Personal Library</Heading>
      <AuthorsPage />
    </Flex>
  )
}
