import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'
import { isMobile } from 'react-device-detect'
import { Heading,useBreakpointValue,AspectRatioBox,Box } from '@chakra-ui/core'
import Typography from '@material-ui/core/Typography'
const Widget = () => {
    const fsize = useBreakpointValue({ base: "3xl", md: "3xl",lg:"5xl",xl:"5xl" })
    return (
    <>
    <Box style={{padding: "5% 5%"}}>
        <br />
        <Heading
        as="h1"
        fontSize={fsize}
        color="cyan.300"
        style={{
            fontFamily: 'Helvetica',
        }}
    >
                A live demo of dagbot! (prefix is <strong>do</strong>)
            </Heading>
            <WidgetBot
    server="491175207122370581"
    channel="684024248733532167"
    style={{height: "600px",width:"100%"}}
  />
    </Box>
    </>
    )
}

export default Widget
