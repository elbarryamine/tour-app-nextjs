import { Button, ButtonProps } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function StartButton(props: ButtonProps) {
  return (
    <Link href="/browse">
      <Button borderRadius={5} colorScheme="none" bg="color_1" color="color_light" _hover={{ bg: 'color_1_hover' }} {...props}>
        Get Started Now
      </Button>
    </Link>
  )
}
