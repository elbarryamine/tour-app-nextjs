import React from 'react'
import { Box, Button, FormControl, Text } from '@chakra-ui/react'
import { FormContainer, FormInput, LoadingPage, SubmitInput } from '../../../components'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
export default function ForgetPassword() {
  // const [loaded, setLoaded] = React.useState<boolean>(false)
  // React.useEffect(() => {
  //   setLoaded(true)
  // }, [])
  // if (!loaded) return <LoadingPage />
  return (
    <FormContainer>
      <FormControl
        className="trcontainer"
        as="form"
        py="40px"
        px="20px"
        borderRadius="2xl"
        boxShadow="sm"
        bg="gray.50"
        border="1px solid"
        borderColor="subtext"
        sx={{}}
        onSubmit={() => {}}>
        <Text as="h4" fontSize="lg" pb="20px" fontWeight="bold" userSelect="none">
          Enter your email to recieve a password
          <Text as="span" fontSize="inherit" fontWeight="bold" color="primary">
            {` reset link`}
          </Text>
        </Text>
        <FormInput id="email" title="Email" type="email" />
        <SubmitInput title="Get reset link" />
        <Button fontWeight="extrabold" color="primary" bg="transparent" pt="20px" d="flex" alignItems="center" gap="5px">
          <FaChevronLeft />
          <Link href="/app/signup">Go back</Link>
        </Button>
      </FormControl>
    </FormContainer>
  )
}
