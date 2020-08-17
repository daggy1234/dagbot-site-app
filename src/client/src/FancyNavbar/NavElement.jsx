import React from 'react'
import NavLink from './NavLink'
import { Heading,Text,Box,Flex } from '@chakra-ui/core'
import './styles.css'

const pathjson =[['Home', '/home'],['Demo', '/demo'],['Invite', 'https://discordapp.com/api/oauth2/authorize?client_id=675589737372975124&permissions=378944&scope=bot'],['Server', 'https://discord.gg/grGkdeS'],['Feedback', '/feedback'],['Commands', '/commands']]

const MenuItems = ({ children }) => (
  <Box as="button" bg="rgba(0, 0, 0, 0)" border="rgba(0, 0, 0, 0)">
    <Heading as="h3" size="lg" style={{textDecoration: "none",color: "white"}}>
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block" textAlign="center">
        {children}
      </Text> 
    </Heading>
  </Box>
  );


const NavElements = () => {

    return(
      <Flex direction={['column', 'column','row','row']}>
      {pathjson.map(i => (i[1].startsWith('http') ?  (<MenuItems><a href={i[1]}>{i[0]}</a></MenuItems>): (
        <NavLink className="nav-link" activeStyle={{
          backgroundColor: "#282c34",
          borderRadius: ".5rem"
        }} to={i[1]}><MenuItems>{i[0]}</MenuItems></NavLink>
      )))}
      </Flex> 
      )
}

export default NavElements;