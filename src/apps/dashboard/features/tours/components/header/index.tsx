import React from 'react'
import { Text, Flex, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'

export function ToursPageHeader() {
  const numberOfTours = 10
  const { primary, subtext, text, overPrimary, background } = useChakraTheme()
  const [selected, setSelected] = React.useState<string>('Newest')
  const sortBy = ['Length', 'Price', 'Popular', 'Latest']
  return (
    <Flex justify="space-between">
      <Flex align="center" gap="10px" h="50px">
        <Text fontSize="display" fontWeight="extrabold" color={text}>
          Manage your tours
        </Text>
        <Text fontSize="body" color={subtext} fontWeight="bold">
          {numberOfTours} tours in total
        </Text>
      </Flex>
      <Flex align="center" gap="10px">
        <Flex align="center" gap="5px">
          <Text fontSize="body" color={subtext} fontWeight="bold" w="100%">
            Sort By :
          </Text>
          <Accordion allowToggle>
            <AccordionItem pos="relative" border="0" zIndex="sortByDropDown">
              <AccordionButton
                h="max-content"
                _focus={{ bg: background, color: text }}
                _hover={{ bg: primary, color: overPrimary }}
                fontSize="body"
                fontWeight="bold">
                {selected}
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pos="absolute" p="0" bg={background}>
                {sortBy.map((type: string, i: number) => {
                  if (type === selected) return
                  return (
                    <Button
                      key={i}
                      onClick={() => setSelected(type)}
                      _focus={{}}
                      _active={{}}
                      py="10px"
                      h="max-content"
                      fontSize="body"
                      fontWeight="bold"
                      w="100%"
                      bg="transparent"
                      borderRadius="0"
                      textTransform="capitalize"
                      _hover={{ bg: primary, color: overPrimary }}>
                      {type}
                    </Button>
                  )
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>

        <Button bg={primary} fontSize="headline" textTransform="uppercase" fontWeight="bold" color={overPrimary}>
          Create new tour
        </Button>
      </Flex>
    </Flex>
  )
}