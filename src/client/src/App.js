import React from 'react'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Home from './Home/index.jsx'
import WidgetPage from './WidgetPage/index.jsx'
import FeedbackForm from './FeedbackForm/index.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Commands from './Commands/index'


export default function App() {
    return (
        <>  
        
            <Router>
                <Switch>
                    <Route
                        path="/demo"
                        render={(props) => <WidgetPage />}
                    />
                    <Route
                        path="/feedback"
                        render={(props) => <FeedbackForm />}
                    />
                    <Route
                        path="/commands"
                        render={(props) => <Commands />}
                    />
                    <Route path="/home" render={(props) => <Home />} />
                    <Route exact path="/" render={(props) => <Home />} />
                    
                </Switch>
            </Router>
        
        </>
    )
}
