import Container from '@material-ui/core/Container'
import { CSSTransition } from 'react-transition-group'
import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import { Box,Text,Flex,Grid,Image } from '@chakra-ui/core'
import './styles.css'
import { AspectRatio } from "@chakra-ui/core"
import { Transition } from 'react-transition-group'
import { isMobile } from 'react-device-detect'
const imagestyle = {
    height: '100%',
    width: '100%',
}

const ContainerFlex = (props) => {
    console.log(isMobile)
    const [componentVisible, setComponentVisible] = React.useState(false)

    const flexAlign = props.left ? "row" : "row-reverse"
    const TAlign = props.left ? "left" : "right"
        return (
            <React.Fragment>
                <Waypoint onEnter={() => setComponentVisible(true)} />
                <CSSTransition
                    in={componentVisible}
                    timeout={2000}
                    classNames="fade"
                    appear={true}
                    exit={false}
                >
                    
                        <Flex width="75%" align="center"  direction={['column', 'column',flexAlign,flexAlign]} className="container-class">
                            <Flex align="center" direction="column" width={{xs: "100%",sm: "100%",lg: "50%",xl: "50%"}}>
                                <Text fontSize={{xs: "2em",sm: "2em",lg: "2em",xl: "2em"} }
                                    as="h1"
                                    className="title-text-container"
                                    color="cyan.300"
                                    justify="center"
                                >
                                    {props.title}
                                </Text>
                                <Text fontSize={{xs: "1em",sm: "1em",lg: "1em",xl: "1em"}}
                                    className="paragraph-text-container"
                                    align={{xs: "center",sm: "center",lg: TAlign,xl: TAlign}}
                                >
                                    {props.description}
                                </Text>
                            </Flex>
                            <Flex align="center" width={{xs: "100%",sm: "100%",lg: "50%",xl: "50%"}}>
                                <Tilt
                                    className="Tilt"
                                    options={{ max: 20, scale: 1 }}
                                    style={{ height: 'auto', width: 'auto' }}
                                >
                                
                                    <Image className="rounded-image" src={props.image}  style={imagestyle} alt={props.title} />
                                
                                </Tilt>
                            </Flex>
                        </Flex>
                    
                </CSSTransition>
            </React.Fragment>
        )
    
    // return (
    //     <>
    //         <Waypoint onEnter={() => setComponentVisible(true)} />
    //         <CSSTransition
    //             in={componentVisible}
    //             timeout={2000}
    //             classNames="fade"
    //             appear={true}
    //             exit={false}
    //         >
    //             <div className="container-class">
    //                 <Grid container spacing={3}>
    //                     <Grid item xs={isMobile ? 12 : 6}>
    //                         <Tilt
    //                             className="Tilt"
    //                             options={{ max: 20, scale: 1, reverse: true }}
    //                             style={{ height: 'auto', width: 'auto' }}
    //                         >
    //                             <img src={props.image} style={imagestyle} />
    //                         </Tilt>
    //                     </Grid>
    //                     <Grid item xs={isMobile ? 12 : 6}>
    //                         <h1
    //                             style={{ fontSize: isMobile ? '2em' : '3em' }}
    //                             className="title-text-container"
    //                         >
    //                             {props.title}
    //                         </h1>
    //                         <p
    //                             style={{ fontSize: isMobile ? '1em' : '2em' }}
    //                             className="paragraph-text-container"
    //                         >
    //                             {props.description}
    //                         </p>
    //                     </Grid>
    //                 </Grid>
    //             </div>
    //         </CSSTransition>
    //     </>
    // )
}
ContainerFlex.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    left: PropTypes.bool.isRequired,
}
export default ContainerFlex
