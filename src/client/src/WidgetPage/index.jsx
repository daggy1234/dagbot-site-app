import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Helmet} from "react-helmet";
import NavBar from '../NavBar/index'
import SiteFooter from '../footer/index'
import Widget from '../widget/index'
import './styles.css'

export default function WidgetPage(props) {
    
    return (
        <React.Fragment>
        <Helmet>
            <title>Dagbot | Demo</title>
        </Helmet>
            <CssBaseline />
            <NavBar />
            <div
                className="demo-page-container"
                style={{ backgroundColor: '#23272A' }}
            >
                <br />
                <br />
                <Widget />
            </div>
            <SiteFooter />
        </React.Fragment>
    )
}
