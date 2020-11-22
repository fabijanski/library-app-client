import React from 'react'
import { Heading, Flex, Link, Box, Divider } from '@chakra-ui/react'
import { Routes, Route, Link as RouterLink } from 'react-router-dom'
import AuthorsPage from './pages/AuthorsPage'
import UsersPage from './pages/UsersPage'

export default function App() {
  return (
    <Flex direction="column" align="center" width="75%" mx="auto">
      <Flex align="center" justifyContent="space-between" w="100%" mx="5">
        <Link to="/" as={RouterLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Box d="flex">
          <Link to="/" as={RouterLink}>
            <h1>Authors</h1>
          </Link>
          <Divider orientation="vertical" m="0 5px" />
          <Link to="/users" as={RouterLink}>
            <h1>Users</h1>
          </Link>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<AuthorsPage />} />
        <Route path="users/" element={<UsersPage />} />
      </Routes>
    </Flex>
  )
}
