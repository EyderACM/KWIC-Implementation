import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

const DarkModeHandler = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <IconButton
        position='absolute'
        left='10px'
        top='10px'
        variant={colorMode === 'light' ? 'outline' : 'solid'}
        colorScheme='teal'
        aria-label='switch-dark'
        icon={<MoonIcon />}
        onClick={toggleColorMode}
      />
    </>
  )
}

export default DarkModeHandler
