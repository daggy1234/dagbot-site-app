import React from 'react'
import StatDiv from '../StatDiv/index'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Link from '../Link/index'
import { useBreakpointValue } from "@chakra-ui/media-query"
import Typography from '@material-ui/core/Typography'
import { Text,Heading } from "@chakra-ui/core";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from 'react-device-detect'
import './styles.css'
import Grid from '@material-ui/core/Grid'
import CustomButton from '../CustomButton/index'

const LargeTitle = () => {
    
    const variant = useBreakpointValue({ base: false, md: false,lg:true,xl:true })
    const fsize = useBreakpointValue({ base: "4xl", md: "4xl",lg:"5xl",xl:"5xl" })
    return (
        <div
            style={{ backgroundColor: '#23272A', fontFamily: 'Montserrat' }}
            className="central-div"
        >
        <br/>   
        <Heading
                as="h1"
                fontSize={fsize}
                color="cyan.300"
                style={{
                    fontFamily: 'Helvetica',
                }}
            >
                An Atypical Discord Meme Bot
            </Heading>
            
            {variant ? (<Text
                    fontSize="2xl"
                    textAlign="justify"
                    style={{
                        color: 'white',
                        fontFamily: 'Helvetica',
                    }}
                >
                    Dagbot is a revolutionary Discord bot with a plethora of
                    wonderful features that will bring a splash of life to your server..
                    Dagbot is flexible with advanced control over what's going
                    on, and with no administrative features,
                    Dagbot will make your depressing life less dreary. With
                    over 100+ commands you are sure to be entertained for life!
                    Dagbot not only helps you laugh at memes, but also lets you
                    create them!
                </Text>) : <br />}
            
            <br />
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <CustomButton href="https://discordapp.com/api/oauth2/authorize?client_id=675589737372975124&permissions=378944&scope=bot">
                    Invite
                </CustomButton>
                <CustomButton href="https://discord.gg/grGkdeS">
                    Server
                </CustomButton>
                <CustomButton href="/dagbot-site/demo">
                    Try it out!
                </CustomButton>
            </Grid>
            <br />
        </div>
    )
}

export default LargeTitle
