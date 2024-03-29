import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

export default function ErrorAlert({ error }: { error: { message: string } }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{error.message}</AlertTitle>
    </Alert>
  )
}
