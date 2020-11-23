import { useColorModeValue } from '@chakra-ui/react'

const useColors = () => {
  const bgColor = useColorModeValue('cyan.400', ' ')
  const headerColor = useColorModeValue('teal.400', 'teal.50')
  const cardColor = useColorModeValue('white', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'white')
  const inputColor = useColorModeValue('gray.100', 'gray.600')

  return {
    bgColor,
    headerColor,
    cardColor,
    textColor,
    inputColor,
  }
}

export default useColors
