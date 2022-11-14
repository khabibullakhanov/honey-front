import React from 'react'
import honey1 from "../../../Assets/Images/Banka va Ari.png"
import "./HomeThirdSection.css"


export function HomeThirdSection() {
    return (
        <div id='home-third-section'>
            <figure>
                <img src={honey1} alt="" />
            </figure>
            <div>
                <h1>Honey created in the laps of nature.</h1>
                <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}
