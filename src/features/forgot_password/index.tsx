import React from 'react'
import { FormControl, Text, Input, FormLabel, Box, Stack, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { mainLinks } from '@shared/utils/link'
import { SubmitInput } from '@components/Layouts/Form'

export default function ForgotPassword() {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} bg="white" borderRadius="10px" color="black" w="100%">
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign="center">
          Tell us your email
        </Heading>
        <Text fontSize={'lg'} color="black">
          and we will send you a reset password link
        </Text>
      </Stack>
      <Box rounded={'lg'} bg="white" boxShadow={'base'} p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel fontWeight="extrabold">Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <SubmitInput title="Reset" />
          <Box color="black" textAlign="center">
            <Link href={mainLinks.login}>
              <Text fontWeight="extrabold" fontSize="body" cursor="pointer">
                Go Back
              </Text>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
