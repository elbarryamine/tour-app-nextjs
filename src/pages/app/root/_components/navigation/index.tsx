import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import {
  AiFillHome,
  AiFillFileText,
  AiFillLike,
  AiOutlineDollarCircle,
  AiOutlineLogout,
  AiFillContacts,
  AiTwotoneHeart,
  AiTwotoneAppstore,
} from 'react-icons/ai'
import { Popover } from '../../../../../components'
export function SideNavigation() {
  return (
    <Box
      h="100%"
      p="20px"
      w="100%"
      zIndex="1000"
      pos="absolute"
      sx={{ '.icon': { cursor: 'pointer', transition: 'all 0.2s' }, '.icon:hover': { transform: 'scale(1.5)' } }}
    >
      <Flex h="100%" alignItems="center">
        <Flex h="max-content" borderRadius="10px" w="80px" bg="gray.800" boxShadow="2xl" alignItems="center" mb="20px" flexDir="column">
          <Flex
            color="white"
            alignItems="center"
            flexDir="column"
            w="100%"
            gap="30px"
            borderBottom="1px dashed"
            borderBottomColor="gray.500"
            py="20px"
          >
            <Box color="primary" borderRadius="50%" d="flex" alignItems="center" className="icon">
              <AiFillHome size="17px" />
            </Box>
            <Box color="white" className="icon">
              <AiTwotoneAppstore size="17px" />
            </Box>
            <Box color="white" className="icon">
              <AiFillFileText size="17px" />
            </Box>
            <Box color="white" className="icon">
              <AiFillLike size="17px" />
            </Box>
          </Flex>
          <Flex color="white" alignItems="center" flexDir="column" w="100%" gap="30px" py="20px">
            <Box color="white" className="icon">
              <AiOutlineDollarCircle size="17px" />
            </Box>

            <Box color="white" className="icon">
              <AiFillContacts size="17px" />
            </Box>
            <Box color="white" className="icon">
              <AiTwotoneHeart size="17px" />
            </Box>
            <Box color="white" className="icon">
              <AiOutlineLogout size="17px" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
