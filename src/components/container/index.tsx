import React from 'react'
import { Box as Bx, Image, useMediaQuery } from '@chakra-ui/react'
type Props = {
  children: React.ReactChild
}
export function FormContainer({ children }: Props) {
  const [xs, sm, md] = useMediaQuery(['(max-width: 600px)', '(max-width: 768px)', '(max-width: 1024px)'])
  console.log(xs, sm, md)
  return (
    <Bx
      h="100vh"
      w="100vw"
      d="flex"
      justifyContent="center"
      bgImage={sm ? 'https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' : ''}
      alignItems="center"
      bg={sm ? '' : 'whitesmoke'}
      bgPos="center"
      bgSize="cover">
      {!sm && (
        <Image
          h="100vh"
          src="https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="svg"
          objectFit="cover"
          objectPosition="20% center"
          overflow="hidden"
          flex={md ? '1' : '2'}
        />
      )}
      <Bx
        d="flex"
        px={sm ? (xs ? '50px' : '150px') : '20px'}
        py="30px"
        flex="1"
        overflow="hidden"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center">
        {children}
      </Bx>
    </Bx>
  )
}
