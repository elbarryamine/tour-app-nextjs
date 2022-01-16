import React from 'react'
import { Box as Bx, Image, Text, useMediaQuery } from '@chakra-ui/react'
type Props = {
  children: React.ReactChild
}
export function FormContainer({ children }: Props) {
  const [xss, xs, sm, md, lg] = useMediaQuery([
    '(max-width: 400px)',
    '(max-width: 600px)',
    '(max-width: 768px)',
    '(max-width: 1024px)',
    '(max-width: 1200px)',
  ])
  let containerPaddingX = '50px'
  if (lg) containerPaddingX = '20px'
  if (md) containerPaddingX = '10px'
  if (sm) containerPaddingX = '50px'
  if (xs) containerPaddingX = '20px'
  if (xss) containerPaddingX = '0px'

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
      {!sm ? (
        <Image
          h="100vh"
          src="https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="svg"
          objectFit="cover"
          objectPosition="20% center"
          overflow="hidden"
          flex="1.2"
        />
      ) : (
        ''
      )}
      <Bx
        d="flex"
        px={containerPaddingX}
        py="30px"
        flex="1"
        overflowX="hidden"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pos="relative"
        maxW="500px">
        {children}
      </Bx>
    </Bx>
  )
}
