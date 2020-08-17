import React from 'react';
import './styles.css'
import {Flex,Link,Button,IconButton,Text,useBreakpointValue,Divider} from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt,faChevronUp,faCopyright,faExternalLinkAlt ,faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import {animateScroll as scroll} from 'react-scroll';
const SiteFooter = () => {
    const brkpoint = useBreakpointValue({base: "column",md: "column","lg":"row","xl":"row"})
    const padding = useBreakpointValue({base: "3rem",md: "3rem","lg":"1.5rem","xl":"1.5rem"})

    return( 
        <footer style={{backgroundColor: '#23272A'}}>
        <Divider color="cyan.300" />
        <div className="container">
            <Flex align="center"
            justify="space-between"
            wrap="wrap"
            alignItems="center"
            padding="1.5rem"
            direction={brkpoint}>
                <Flex direction="row" alignItems="center" paddingBottom={padding}>
                <span className="fa-logo" ><Link href="https://github.com/daggy1234/dagbot"><FontAwesomeIcon color="white" icon={["fab", "github"]} size="lg" /></Link></span>
                <span className="fa-logo"><Link href="https://server.daggy.tech"><FontAwesomeIcon color="#7289DA " icon={["fab", "discord"]} size="lg" /></Link></span>
                <span className="fa-logo"><Link href="https://www.reddit.com/r/dagbot" ><FontAwesomeIcon color="#ff4f00" icon={["fab", "reddit"]} size="lg" /></Link></span>
                <span className="fa-logo"><Link href="https://twitter.com/Dagbot1" ><FontAwesomeIcon color="#1da1f2" icon={["fab", "twitter"]} size="lg" /></Link></span>
                </Flex>
                <Flex direction="column" alignContent="justify" paddingBottom={padding}>
                    <Link href="https://discord.com"><Button leftIcon={<FontAwesomeIcon icon={faSignInAlt} />}   colorScheme="cyan" variant="outline"  ><Text color="cyan.300" >Invite Dagbot to your server</Text></Button></Link>
                </Flex>
                <Flex direction="column" alignContent="justify" paddingBottom={padding}>
                    <img src="https://img.shields.io/badge/BUILT%20WITH-REACT%20JS-blue?style=for-the-badge&logo=react.png" alt="built with react"/>
                </Flex>
            </Flex>
            <Flex align="center"
            justify="space-between"
            wrap="wrap"
            alignItems="center"
            padding="1.5rem"
            direction={brkpoint}>
                <Flex direction="column" paddingBottom={padding}>
                    <Text color="cyan.300"><FontAwesomeIcon icon={faCopyright} /> Daggy1234 </Text>
                </Flex>
                <Flex direction="column" alignContent="justify" paddingBottom={padding}>
                <Link href="https://dagpi.tk" ><Button colorScheme="cyan" variant="outline" rightIcon={<FontAwesomeIcon icon={faExternalLinkAlt}/>} ><Text color="cyan.300">Check out our API </Text></Button></Link>
                </Flex>
                <Flex direction="row" paddingBottom={padding}>
                    <img src="https://img.shields.io/badge/LICENSE-GNU%20AGPLv3%20-%2376E4F7?style=for-the-badge&logoWidth=40.png" alt="License AGPLv3"/>
                </Flex>
            </Flex>
            <br />
            <Text onClick={() => {scroll.scrollToTop();}} color="cyan.300"><FontAwesomeIcon icon={faChevronUp} />  Scroll To the very top  <FontAwesomeIcon icon={faChevronUp} /></Text>
        </div>
        </footer>
    );
}

export default SiteFooter;