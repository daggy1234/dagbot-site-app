import React from 'react'
import Link from '../Link'
import CustomButton from '../CustomButton/index'
import './App.css'
const WarnDiv = () => {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <img
                        src={
                            'https://i.imgur.com/O4E4m4P.jpeg'
                        }
                        className="App-logo"
                        alt="warning symbol"
                    />
                    <h2>Please wait for us to tidy things up on our end!</h2>
                    <Link to="/">
                        <CustomButton>Home</CustomButton>
                    </Link>
                </div>
                    
                
            </div>
        </>
    )
}

export default WarnDiv
