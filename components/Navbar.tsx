// components/Navbar.tsx

import { Box, Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Box bg="black" p={4}>
      <Flex justifyContent="center">
        <Link href="/users" mx={4} _hover={{ textDecoration: 'underline' }}>
          <Text
            color="white"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            Users
          </Text>
        </Link>
        <Link href="/groups" mx={4}>
          <Text
            color="white"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            Groups
          </Text>
        </Link>
      </Flex>
    </Box>
  )
}

export default Navbar
