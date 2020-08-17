import React from 'react'
import NavBar from '../NavBar/index'
import Form from '../Form/index'
import CssBaseline from '@material-ui/core/CssBaseline'
import SiteFooter from '../footer/index'
import './styles.css'
const FeedbackForm = () => {
    return (
        <>
            <CssBaseline />
            <NavBar />
            <div
                className="demo-page-container"
                style={{ backgroundColor: '#23272A' }}
            >
                <Form />
            </div>
            <SiteFooter />
        </>
    )
}

export default FeedbackForm
