import React from 'react'
import TextParticles from './TextParticles'
import AudioRoom from './AudioRoom'
import gifLogo from '../assets/gifLogo.gif'
import SearchUser from './SearchUser'


function Homepage() {
    return (
        <div className="home-component">
            <div className="gif-logo-div">
                <img src={gifLogo} alt="Title Logo" className="gif-logo" width="600" height="55" />
            </div>
            <div className="body-background">
                <div className="slogan">
                    <h1>The Musicians Community</h1>
                </div>
                <div className="particles-map">
                    <SearchUser />
                    <TextParticles />
                </div>
                <div></div>
                <AudioRoom />
            </div>
        </div>
    )
}

export default Homepage
