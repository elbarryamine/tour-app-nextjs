import React from 'react'
import {
  FormControl,
  Text,
  Input,
  FormLabel,
  Box,
  Checkbox,
  Stack,
  Heading,
  chakra,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitInput } from 'components/form'
import { LinkTo } from 'utils/link'
import _ from 'lodash'
import { FaTimes } from 'react-icons/fa'
import Router from 'next/router'
import { useSignIn } from './api/useSignIn'

export default function Login() {
  const [isError, setIsError] = React.useState<string>('')
  const [runLoginQuery, { loading, data }] = useSignIn()
  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const {
        email: { value: email },
        password: { value: password },
      } = e.target
      await runLoginQuery({ variables: { email, password } })
      e.target.reset()
    } catch (e: any) {
      setIsError(e.message)
    }
  }
  React.useEffect(() => {
    if (loading || _.isEmpty(data)) return
    if (data.signIn) {
      Router.push(LinkTo.dashboard)
    }
  }, [loading, data])
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} borderRadius="10px" color="" w="100%">
      <Heading fontSize={'4xl'} textAlign="center">
        {isError && (
          <Alert status="error" pos="absolute" top="0px" right="0px">
            <AlertIcon />
            <AlertTitle mr={2}>Error</AlertTitle>
            <AlertDescription>{isError}</AlertDescription>
            <Box onClick={() => setIsError('')} cursor="pointer" pos="absolute" right="20px" color="red">
              <FaTimes size="20px" />
            </Box>
          </Alert>
        )}
        Sign in to your account
      </Heading>
      <chakra.form rounded={'lg'} bg="" boxShadow={'base'} p={8} onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel fontWeight="extrabold">Email address</FormLabel>
            <Input required type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel fontWeight="extrabold">Password</FormLabel>
            <Input required type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Checkbox colorScheme="purple">
                <Text fontWeight="extrabold" fontSize="body">
                  Remember me
                </Text>
              </Checkbox>
              <Box color="">
                <Link passHref={true} href={LinkTo.forgetPassword}>
                  <Text fontWeight="extrabold" fontSize="body" cursor="pointer">
                    Forgot password?
                  </Text>
                </Link>
              </Box>
            </Stack>
            <Box color="" textAlign="center">
              <Link passHref={true} href={LinkTo.sigunp}>
                <Text fontWeight="extrabold" fontSize="body" cursor="pointer">
                  Create an account
                </Text>
              </Link>
            </Box>
            <SubmitInput title="Sign In" />
          </Stack>
        </Stack>
      </chakra.form>
    </Stack>
  )
}