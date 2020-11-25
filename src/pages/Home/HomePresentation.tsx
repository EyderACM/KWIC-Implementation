import React from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ScaleFade,
  Stack,
  Text,
} from '@chakra-ui/react'
import useColors from 'shared/constants/colors'

interface IHomePresentation {
  kwicWords: String[]
  handleSubmit: any
  onSubmit: any
  register: any
}

const HomePresentation: React.FC<IHomePresentation> = ({
  handleSubmit,
  onSubmit,
  register,
  kwicWords,
}) => {
  const colors = useColors()

  return (
    <Box bg={colors.bgColor} w='full' minHeight='100vh' h='100vh'>
      <ScaleFade initialScale={0.8} in={true}>
        <Center h='100vh'>
          <Box
            background={colors.cardColor}
            w={{ base: '90vw', sm: '60vw' }}
            h='95vh'
            px={{ base: 6, sm: 12 }}
            py={4}
            rounded={16}
          >
            <Stack spacing={4} h='100%'>
              <Heading color={colors.headerColor} as='h1' size='lg' paddingTop={4}>
                Welcome to KwicApp
              </Heading>
              <Box paddingBottom={4}>
                <Text color={colors.textColor} fontWeight='500'>
                  Introduce a word to be splitted in its maximum combinations.
                </Text>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex
                  alignItems='flex-end'
                  border='1px'
                  borderColor='teal.400'
                  borderRadius={8}
                  direction='column'
                  padding={4}
                >
                  <FormLabel px={4} color={colors.textColor} w='100%'>
                    Insert your word
                  </FormLabel>
                  <FormControl rounded={16} w='100%'>
                    <Stack direction='row' w='100%'>
                      <Input
                        name='word'
                        required={true}
                        ref={register}
                        bg={colors.inputColor}
                        type='text'
                      />
                      <Button mt={4} marginLeft={4} colorScheme='teal' type='submit'>
                        Submit
                      </Button>
                    </Stack>
                  </FormControl>
                </Flex>
              </form>
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
                <Text
                  color={colors.textColor}
                  width='100%'
                  fontSize='sm'
                  paddingBottom={2}
                >
                  Result output:{' '}
                </Text>
                <Box borderRadius={8} bg={colors.inputColor} h='100%' w='100%' p={4}>
                  {kwicWords.map((word, i) => (
                    <Text key={i} color={colors.textColor} fontFamily='monospace'>
                      {word}
                    </Text>
                  ))}
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Center>
      </ScaleFade>
    </Box>
  )
}

export default HomePresentation
