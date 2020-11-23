import React, { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Fade,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ScaleFade,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const KwicApp = () => {
  const [kwikWords, setKwikWords] = useState<String[]>([])
  const bgColor = useColorModeValue('cyan.400', ' ')
  const headerColor = useColorModeValue('teal.400', 'teal.50')
  const cardColor = useColorModeValue('white', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'white')
  const inputColor = useColorModeValue('gray.100', 'gray.600')

  return (
    <ScaleFade initialScale={0.8} in={true}>
      <Box bg={bgColor} w='full' minHeight='100vh' h='100vh'>
        <Center h='100%'>
          <Box
            background={cardColor}
            w={{ base: '90vw', sm: '60vw' }}
            h='95vh'
            px={{ base: 6, sm: 12 }}
            py={4}
            rounded={16}
          >
            <Stack spacing={4} h='100%'>
              <Heading color={headerColor} as='h1' size='lg' paddingTop={4}>
                Welcome to KwicApp
              </Heading>
              <Box paddingBottom={4}>
                <Text color={textColor} fontWeight='500'>
                  Introduce a word to be splitted in its maximum combinations.
                </Text>
              </Box>
              <Flex
                alignItems='flex-end'
                border='1px'
                borderColor='teal.400'
                borderRadius={8}
                direction='column'
                padding={4}
              >
                <FormLabel px={4} color={textColor} w='100%'>
                  Insert your word
                </FormLabel>
                <Stack direction='row' w='100%'>
                  <FormControl rounded={16} w='100%'>
                    <Input bg={inputColor} type='text' />
                  </FormControl>
                  <Button mt={4} marginLeft={4} colorScheme='teal' type='submit'>
                    Submit
                  </Button>
                </Stack>
              </Flex>
              <Flex
                alignItems='flex'
                border='1px'
                borderColor='teal.400'
                borderRadius={8}
                direction='column'
                padding={4}
                width='100%'
                h='100%'
              >
                <Text color={textColor} width='100%' fontSize='sm' paddingBottom={2}>
                  Result output:{' '}
                </Text>
                <Box borderRadius={8} bg={inputColor} h='100%' w='100%' p={2}>
                  <Text color='black' fontFamily='monospace'>
                    sad,
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
      </Box>
    </ScaleFade>
  )
}

export default KwicApp
