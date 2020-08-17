import Container from '@material-ui/core/Container'
import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

const LeftFlex = (props) => {
    return (
        <Container>
            <Box
                display="flex"
                flexDirection="row"
                p={1}
                m={1}
                alignContent="flex-start"
                bgcolor="#23272A"
            >
                <h1 styles={{ Color: '#fff' }}>{props.title}</h1>
            </Box>
        </Container>
    )
}
LeftFlex.propTypes = {
    title: PropTypes.string.isRequired,
}
export default LeftFlex
