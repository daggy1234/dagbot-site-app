import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import LargeTitle from '../MainPageDiv/Largetitle'
import NavBar from '../NavBar/index'
import { Helmet } from 'react-helmet'
import ContainerFlex from '../ContainerFlex/index'
import {Flex,Divider } from '@chakra-ui/core'
import SiteFooter from '../footer/index'

export default function Home(props) {
    return (
        
        <React.Fragment>    
        <Helmet>
            <title>Dagbot</title>
        </Helmet>
        <NavBar />
        <div  style={{ backgroundColor: '#23272A' ,padding: "10% 0"}} >
            
                <LargeTitle />
            <Flex align="center" justify="center" direction="column" >
                <ContainerFlex
                    title={'Easy Gif and Image Manipulation'}
                    description={
                        "Make fun and mind bogglingly cool images and gifs all powered by the Dagbot API. With our Image Converter everything from emojis, to user pfp's can be edited!"
                    }
                    image={'https://i.imgur.com/wO49v4V.jpeg'}
                    left={true}
                />
                <ContainerFlex
                    title={'Powerful Meme Generator'}
                    description={
                        'With more than 100 predefined meme generators combined with a profesional modern meme creator and a retro meme creator that support all images,making memes has never been so easy'
                    }
                    image={'https://i.imgur.com/gplHs6M.gif'}
                    left={false}
                />
                <ContainerFlex
                    title={'Lots of fun minigames'}
                    description={
                        'A refreshing break from the same economy games, dagbot has fun ranging from a AI tictactoe, to hangman. It even has whose that pokemon and a logo guessing game!'
                    }
                    image={'https://i.imgur.com/wO49v4V.jpeg'}
                    left={true}
                />
                <ContainerFlex
                    title={'Control what happens'}
                    description={
                        'Dagbot is highly modular with modules named Cogs can be enabled/disabled not to mention the standard customiseable prefix'
                    }
                    image={'https://i.imgur.com/mon5XTF.gif'}
                    left={false}
                />
                <ContainerFlex
                    title={'Even Information is fun!'}
                    description={
                        "Dagbot's command provide accurate info quickly! View Spotify, VSC ,badges guild stats and more right on discord! Combine this with YT, Google searches and all the info is ready!"
                    }
                    image={'https://i.imgur.com/kkQZXLF.jpeg'}
                    left={true}
                />
            
            </Flex>
            
            <SiteFooter />  
            </div>
            
             
        </React.Fragment>
    )
}
