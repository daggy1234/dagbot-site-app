import CountUp, { useCountUp } from 'react-countup'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import './styles.css'
const StatDiv = () => {
    return (
        <>
            <div>
                <Grid container spacing={2} text-align="center">
                    <Grid item xs sm className="stat-container">
                        <div className="center">
                            <p className="div-title">Servers</p>
                            <CountUp duration={2} end={81} />
                        </div>
                    </Grid>
                    <Grid item xs sm className="stat-container">
                        <div className="center">
                            <p className="div-title">Users</p>
                            <CountUp delay={2} end={81000} duration={2} />
                        </div>
                    </Grid>
                    <Grid item xs sm className="stat-container">
                        <div className="center">
                            <p className="div-title">Commands</p>
                            <CountUp delay={4} end={100} duration={2} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default StatDiv
