import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { isMobile } from 'react-device-detect'
// We can inject some CSS into the DOM.
import { useBreakpointValue } from "@chakra-ui/media-query"


const styles = {
    root: {
        background: '#4E5D94',
        border: '.1em solid #7289da',
        textAlign: 'center',
        boxShadow: '-.2em .2em #4e5d94',
        fontFamily: 'Helvetica, sans-serif',
        padding: '0.5em',
        color: 'white',
        borderRadius: '0.25em',
    },
}

function CustomButton(props) {
    const { classes, children, className, ...other } = props
    const fsize = useBreakpointValue({base: '1em',md:'1em','lg':'2em',xl:'2em'})
    return (
        <Button className={clsx(classes.root, className)} style={{fontSize:fsize}} {...other}>
            {children || 'class names'}
        </Button>
    )
}

CustomButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default withStyles(styles)(CustomButton)
