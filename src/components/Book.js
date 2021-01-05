import React from 'react'
import { Image } from '@chakra-ui/image'
import { Heading, Flex } from '@chakra-ui/react'

export const Book = ({ book }) => (
  <Flex
    m="3"
    mw="200px"
    border="1px"
    borderRadius="md"
    borderColor="gray.200"
    overflow="hidden"
    align="center"
    bg="gray.50"
    w="100%"
  >
    <Image
      src={book.cover.url}
      alt={book.title}
      boxSize="100px"
      objectFit="cover"
    />
    <Flex direction="column" mx="2" justify="center">
      <Heading size="md" color="gray.700">
        {book.title}
      </Heading>
      <Heading size="sm" color="gray.400">
        {book.author.name}
      </Heading>
    </Flex>
  </Flex>
)
