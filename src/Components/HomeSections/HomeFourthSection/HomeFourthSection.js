import React from 'react'
import "./HomeFourthSection.css"
import honey2 from "../../../Assets/Images/Ari Uyi va Ari.png"



export function HomeFourthSection() {
    return (
        <div id='home-fourth-section'>
            <div>
                <h1>Honey created in the laps of nature.</h1>
                <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                <button>Learn More</button>
            </div>
            <figure>
                <img src={honey2} alt="" />
            </figure>
        </div>
    )
}
