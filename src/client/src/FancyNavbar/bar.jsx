import NavElement from './NavElement'
import React from 'react'
import {Flex,Avatar,Box,svg,Heading} from '@chakra-ui/core'



const Bar = ({ onOpen,btnRef}) => {
  
  
    return(
    <>
    

    <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    alignItems="center"
    padding="1.5rem 1.5rem 0 1.5rem"
    bg="#23272A"
    color="#fff"
    
  >
    <Flex align="left" mr={4} alignItems="center">
      <Avatar
        size="md"
        name="Dagbot"
        src="https://i.imgur.com/OSjNZ4V.png"
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      />
      <Heading as="h1" size="2xl" color="cyan.300" letterSpacing={"-.1rem"}>
        Dagbot
      </Heading>
    </Flex>

    <Box
    display={{ base: "block", md: "none" }}
    onClick={onOpen}
    ref={btnRef}
  >
    <svg
      fill="white"
      width="12px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </Box>

        <Box
          display={{ sm: "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexShrink={1}
        >
          <NavElement />
        </Box>
      </Flex>
     
      </>);
}

export default Bar;