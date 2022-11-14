import React from 'react'
import "./HomeFirstSection.css"
import introImage from "../../..//Assets/Images/Home Intro Background.jpg"



export function HomeFirstSection() {
    return (
        <div id='home-intro-main-container'>
            <figure>
                <img src={introImage} alt="" />
            </figure>
            <div id='home-intro-btns-container'>
                <button>Buy Now</button>
                <button>Learn More</button>
            </div>
        </div>
    )
}
