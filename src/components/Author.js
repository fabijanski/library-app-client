import React from 'react'
import { Image } from '@chakra-ui/image'
import { Heading, Flex } from '@chakra-ui/react'

export const Author = ({ author }) => {
  return (
    <Flex
      m="3"
      mw="200px"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      overflow="hidden"
      direction="column"
      align="center"
      bg="gray.50"
    >
      <Image
        src={author.photo.url}
        alt={author.name}
        boxSize="200px"
        objectFit="cover"
      />
      <Heading size="md" color="gray.700" my="3">
        {author.name}
      </Heading>
    </Flex>
  )
}
