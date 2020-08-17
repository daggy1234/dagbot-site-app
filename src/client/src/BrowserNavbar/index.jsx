import React from 'react'
import Link from '../Link/index'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import './styles.css'
const BrowserNavbar = () => {
    return (
        <Grid container spacing={3}>
            <Grid item sm={3}>
                <Link to="/dagbot-site/">
                    <Button>
                        <h1
                            style={{
                                color: 'white',
                                fontFamily:
                                    'Uni Sans,Whitney Book,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
                                fontSize: '4em',
                            }}
                        >
                            Dagbot
                        </h1>
                    </Button>
                </Link>
            </Grid>
            <Grid item sm={9}>
                <Box display="flex" p={1} text-align="end" m={1}>
                    <Box p={1}>
                        <Link to="/demo">
                            <Button>
                                <h1 className="navbar-text">Demo</h1>
                            </Button>
                        </Link>
                    </Box>
                    <Box p={1}>
                        <Button href="https://discordapp.com/api/oauth2/authorize?client_id=675589737372975124&permissions=378944&scope=bot">
                            <h1 className="navbar-text">Invite</h1>
                        </Button>
                    </Box>
                    <Box p={1}>
                        <Button href="https://discord.gg/grGkdeS">
                            <h1 className="navbar-text">Support</h1>
                        </Button>
                    </Box>
                    <Box p={1}>
                        <Link to="/commands">
                            <Button>
                                <h1 className="navbar-text">Commands</h1>
                            </Button>
                        </Link>
                    </Box>
                    <Box p={1}>
                        <Link to="/feedback">
                            <Button>
                                <h1 className="navbar-text">Feedback</h1>
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default BrowserNavbar
