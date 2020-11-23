import React, { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Code,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

const KwicApp = () => {
  const [kwikWords, setKwikWords] = useState<String[]>([])

  return (
    <Box bg='cyan.400' w='full' minHeight='100vh'>
      <Center h='full'>
        <Box
          bg='white'
          w={{ base: '90vw', sm: '60vw' }}
          h='95vh'
          px={{ base: 6, sm: 12 }}
          py={4}
          rounded={16}
        >
          <Stack spacing={4} h='100%'>
            <Heading color='teal.400' as='h1' size='lg' paddingTop={4}>
              Welcome to KwicApp
            </Heading>
            <Box paddingBottom={4}>
              <Text color='gray.700' fontWeight='500'>
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
              <FormLabel px={4} color='gray.700' w='100%'>
                Insert your word
              </FormLabel>
              <Stack direction='row' w='100%'>
                <FormControl rounded={16} w='100%'>
                  <Input bg='white' type='text' />
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
              <Text width='100%' fontSize='sm' paddingBottom={2}>
                Result output:{' '}
              </Text>
              <Box borderRadius={8} bg='gray.200' h='100%' w='100%' p={2}>
                <Text fontFamily='monospace'>sad,</Text>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Center>
    </Box>
  )
}

export default KwicApp
