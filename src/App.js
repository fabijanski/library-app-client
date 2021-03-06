import React from 'react'
import { Heading, Flex, Link, Box, Divider } from '@chakra-ui/react'
import { Routes, Route, Link as RouterLink } from 'react-router-dom'
import AuthorsPage from './pages/AuthorsPage'
import UsersPage from './pages/UsersPage'
import BooksPage from './pages/BooksPage'

export default function App() {
  return (
    <Flex
      direction="column"
      align="center"
      width={['100%', '75%', '60%']}
      mx="auto"
    >
      <Flex
        direction={['column', null, 'row']}
        align="center"
        justifyContent="space-between"
        w="100%"
        mx="5"
      >
        <Link to="/" as={RouterLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Box d="flex">
          <Link to="/" as={RouterLink}>
            <h1>Books</h1>
          </Link>
          <Divider orientation="vertical" m="0 5px" />
          <Link to="authors/" as={RouterLink}>
            <h1>Authors</h1>
          </Link>
          <Divider orientation="vertical" m="0 5px" />
          <Link to="users/" as={RouterLink}>
            <h1>Users</h1>
          </Link>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="authors/" element={<AuthorsPage />} />
        <Route path="users/" element={<UsersPage />} />
      </Routes>
    </Flex>
  )
}
