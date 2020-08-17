import React from 'react'
import NavBar from '../NavBar/index'
import {Helmet} from "react-helmet";
import WarnDiv from '../WorkingOnIt/index'
import SiteFooter from '../footer/index'
import './styles.css'
const Commands = () => {
    return (
        <>
            <Helmet>
                <title>Dagbot | Commands</title>
            </Helmet>
            <NavBar />
            <div
                className="demo-page-container"
                style={{ backgroundColor: '#23272A' }}
            >
                <WarnDiv />
            </div>
            <SiteFooter />
        </>
    )
}

export default Commands
