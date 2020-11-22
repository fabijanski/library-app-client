import React from 'react'
import { Flex, Heading, Avatar } from '@chakra-ui/react'

export const User = ({ user }) => (
  <Flex alignItems="center" direction="column" w="100%" mt="5">
    <Avatar
      size="xl"
      src={user.avatar.image.url}
      bg={`${user.avatar.color}.500`}
    />
    <Heading mx="4" color="gray.700">
      {user.name}
    </Heading>
  </Flex>
)
